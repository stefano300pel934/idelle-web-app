"use client";
import { useState, useRef } from "react"; // Importa useRef
import Footer from "@/components/ui/footer";
import Head from "next/head";
import emailjs from "emailjs-com"; // Import di EmailJS

export default function Home() {
  // Stato per il numero di posti disponibili
  const [postiDisponibili, setPostiDisponibili] = useState(17);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    cognome: '',
    telefono: ''
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // Funzione per il recupero del numero di posti disponibili dal server
  const decrementaPosti = () => {
    if (postiDisponibili > 0) {
      //setPostiDisponibili(postiDisponibili - 1);
    }
  };

  // Funzione per gestire il cambiamento dei campi del form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Funzione per inviare il form tramite EmailJS
  const inviaForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { email, nome, cognome, telefono } = formData;

    try {
      // Recupera le credenziali da variabili di ambiente
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      // Verifica che le variabili di ambiente siano definite
      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS credentials are not properly set in the environment.");
      }

      // Aggiungi la tua email personale come destinatario
      const emailData = {
        email,
        nome,
        cognome,
        telefono,
        to_email: "stefano_pel@live.it", // La tua email personale
        reply_to: email, // L'email dell'utente come mittente
      };

      // Invia i dati tramite EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        userId
      );

      if (response.status === 200) {
        alert("Email inviata con successo!");
        decrementaPosti(); // Decrementa i posti disponibili
        setFormData({
          email: '',
          nome: '',
          cognome: '',
          telefono: ''
        }); // Resetta i campi del form dopo l'invio
      } else {
        alert("Errore nell'invio dell'email. Riprova più tardi.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Consulente di web marketing a Brescia</title>
        <meta name="description" content="Landing page con form Mailchimp" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-800 to-black">
        <div className="w-full max-w-4xl p-8">
          {/* Prima Sezione con Gradiente */}
          <div className="text-white p-8 rounded-t-lg mb-8">
            <h1 className="text-5xl font-bold mb-6 text-center font-sans">
              Consulente di web marketing a Brescia
            </h1>
            <p className="text-lg mb-4 leading-relaxed font-sans">
              Gli imprenditori o liberi professionisti di solito hanno le
              seguenti necessità:
            </p>

            {/* Sezione con elenco puntato (Emoticon ✳️) */}
            <ul className="ml-6 text-lg font-sans mb-8">
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✳️</span> Farsi conoscere
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✳️</span> Vendere con più
                profitto
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✳️</span> Automatizzare i
                processi di vendita
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✳️</span> Elaborare una
                strategia di marketing
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✳️</span> Fare ordine tra
                i dati provenienti da diverse fonti
              </li>
            </ul>

            <p className="text-lg mb-6 leading-relaxed font-sans">
              Generalmente le agenzie (o i consulenti) propongono le seguenti
              soluzioni:
            </p>

            {/* Sezione con elenco puntato (Emoticon ⚠️) */}
            <ul className="ml-6 text-lg font-sans mb-8">
              <li className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">⚠️</span> Creazione
                sito web
              </li>
              <li className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">⚠️</span> Gestione
                Social (n post mensili)
              </li>
              <li className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">⚠️</span> Creazione
                Campagne Google/Facebook ecc..
              </li>
              <li className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">⚠️</span> Proporre un
                CRM
              </li>
              <li className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">⚠️</span> Campagne
                Youtube
              </li>
            </ul>

            <p className="text-lg mb-6 leading-relaxed font-sans">
              Questi professionisti ti stanno presentando degli strumenti, non
              delle soluzioni. Trovare soluzioni, invece, significa provare a
              rispondere alle tue domande, ai tuoi dubbi. Solo dopo si scelgono
              gli strumenti.
            </p>

            <p className="text-lg mb-6 leading-relaxed font-sans border-2 border-dashed border-white p-2 rounded-md">
              <h3 className="text-xl font-bold">Un esempio:</h3>
              Pelizzari s.r.l. ha aumentato la sua base clienti con il sito web
              e ha fidelizzato quelli esistenti con campagne mirate. Questo
              grazie all’analisi dei dati presenti sul software gestionale che ci
              ha indicato su quali settori era meglio investire (🟰nuove
              opportunità per l’azienda). Un esempio di come digital e mondo
              reale si influenzino a vicenda. ✨ Fatturato +15% annuo ✨
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 font-sans">
              Quello che posso proporti
              <span className="mr-2">📢</span>
            </h2>

            {/* Parte evidenziata con testo nero e grassetto */}
            <div className="bg-yellow-100 border-2 border-dashed border-yellow-400 p-4 rounded-lg mb-8">
              <p className="text-lg leading-relaxed font-sans font-bold text-black">
                Solo fino a fine Dicembre una consulenza gratuita per te in
                presenza, o se preferisci, online. Raccontami dei tuoi problemi /
                bisogni e io ti proporrò delle soluzioni. Non guardo l’orologio,
                sarò a tua completa disposizione per il tempo che ti serve. Non
                ti tartasserò come i call center.{" "}
                <div className="underline">🔒I tuoi dati con me sono al sicuro 🔒</div>
              </p>
            </div>

            {/* Aggiungi la sezione con i posti disponibili */}
            <div className="bg-red-500 text-white text-2xl font-bold text-center p-4 mb-8 rounded-lg">
              <p>⏳ Solo {postiDisponibili} posti disponibili! ⏳</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gradient-to-b from-gray-800 to-black text-white p-6 rounded-lg mb-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center font-sans">
              Iscriviti per ricevere una consulenza
            </h3>
            <div id="mc_embed_signup">
              <form
                ref={formRef} // Riferimento al form
                onSubmit={inviaForm} // Usa la funzione aggiornata per l'invio
                className="validate"
              >
                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-EMAIL" className="block text-lg text-white">
                    Indirizzo email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="required email p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-600"
                    id="mce-EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-FNAME" className="block text-lg text-white">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    className="text p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-600"
                    id="mce-FNAME"
                    value={formData.nome}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-LNAME" className="block text-lg text-white">
                    Cognome
                  </label>
                  <input
                    type="text"
                    name="cognome"
                    className="text p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-600"
                    id="mce-LNAME"
                    value={formData.cognome}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-PHONE" className="block text-lg text-white">
                    Numero di telefono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    className="text p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-600"
                    id="mce-PHONE"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="clear foot">
                  <input
                    type="submit"
                    value="Iscriviti"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button bg-indigo-600 font-bold text-white p-3 rounded-full w-full hover:bg-indigo-700"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6 text-center">
              <a
                href="https://wa.me/393371117277"
                target="_blank"
                className="inline-block bg-green-400 font-bold text-white py-3 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300"
              >
                Oppure chatta con me
              </a>
            </div>
          </div>

          {/* Sezione con immagine e testo */}
          <div className="flex items-center justify-between bg-gray-800 text-white p-8 rounded-lg mb-8">
            {/* Colonna immagine */}
            <div className="w-1/3">
              <img
                src="/consulente-web-marketing-brescia.jpg"
                alt="Stefano"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Colonna testo */}
            <div className="w-2/3 pl-8">
              <p className="text-lg font-sans mb-4">
                Mi chiamo Stefano, ho 30 anni. La mia infanzia ha coinciso con
                il periodo in cui si trovava in atto la rivoluzione digitale e
                questa novità mi ha sin da subito affascinato, tanto da intraprendere
                la strada del mondo digital (iniziando dall’Università di Informatica).
              </p>
            </div>
          </div>

          <div className="text-white">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
