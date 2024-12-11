// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

// La funzione POST viene chiamata quando una richiesta POST arriva a /api/send-email
export async function POST(req: Request) {
  // Estrai il corpo della richiesta JSON
  const { nome, email, messaggio } = await req.json();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const privateApiKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // Verifica che tutte le variabili di ambiente siano presenti
  if (!serviceId || !templateId || !privateApiKey) {
    return NextResponse.json({ error: 'Le variabili di ambiente EmailJS non sono configurate correttamente.' }, { status: 500 });
  }

  try {
    // Invia l'email tramite EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      { nome, email, messaggio },
      privateApiKey
    );

    // Risposta positiva se l'email è stata inviata con successo
    return NextResponse.json({ message: 'Email inviata con successo!' }, { status: 200 });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return NextResponse.json({ error: 'Errore nell\'invio dell\'email' }, { status: 500 });
  }
}
