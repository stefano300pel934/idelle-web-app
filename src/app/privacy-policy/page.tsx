"use client";
import TextTyper from "@/components/TextTyper";
import { NavigationMenuDemo } from "../menu";
import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {

  const title = "Privacy Policy";

  return (
    <><header className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-6">

    <NavigationMenuDemo></NavigationMenuDemo>

    </header>
  
  
   
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:px-48 py-10">
 
    <h1 className="mt-10 relative white-spaces-nowrap max-w-fit text-4xl text-center  mx-5 mb-4">{title}</h1>
  
     
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
           
        <p>La presente Privacy Policy descrive le modalità di raccolta, utilizzo, conservazione e protezione dei dati personali forniti dagli utenti durante l'interazione con i servizi offerti da Stefano Pelizzari.</p>

<h2>1. Titolare del Trattamento dei Dati</h2>
<p>Il titolare del trattamento dei dati personali è:</p>
<ul>
    <li><strong>Stefano Pelizzari</strong></li>
    <li>Nuvolera (BS), Italia</li>
    <li>Email di contatto: <a href="mailto:stefano_pel@live.it">stefano_pel@live.it</a></li>
    
</ul>

<h2>2. Tipologie di Dati Raccolti</h2>
<p>I dati personali raccolti durante l'utilizzo dei servizi possono includere, a titolo esemplificativo, ma non limitato a:</p>
<ul>
    <li><strong>Dati di contatto</strong>: nome, cognome, indirizzo email, numero di telefono.</li>
    <li><strong>Dati di navigazione</strong>: indirizzo IP, tipo di dispositivo, sistema operativo, data e ora di accesso al sito, pagine visitate, ecc.</li>
    <li><strong>Dati forniti volontariamente dall'utente</strong>: messaggi, commenti, richieste di informazioni.</li>
</ul>

<h2>3. Finalità del Trattamento</h2>
<p>I dati personali raccolti vengono trattati per le seguenti finalità:</p>
<ul>
    <li>Gestire e rispondere alle richieste inviate dagli utenti.</li>
    <li>Fornire i servizi richiesti.</li>
    <li>Inviare comunicazioni informative o promozionali (se richiesto dall'utente).</li>
    <li>Migliorare i servizi offerti, attraverso l'analisi dei dati di utilizzo del sito.</li>
</ul>

<h2>4. Base Giuridica del Trattamento</h2>
<p>Il trattamento dei dati personali si basa su:</p>
<ul>
    <li>Il consenso esplicito dell'utente (ad esempio, quando si inviano informazioni attraverso moduli di contatto).</li>
    <li>L'esecuzione di un contratto o la necessità di compiere pre-contrattualità per la fornitura dei servizi richiesti.</li>
    <li>L'interesse legittimo del titolare per finalità di miglioramento del servizio.</li>
</ul>

<h2>5. Modalità di Trattamento dei Dati</h2>
<p>Il trattamento dei dati avviene in modalità elettronica e/o cartacea, in modo da garantire la sicurezza e la riservatezza delle informazioni. I dati personali non saranno mai condivisi con terze parti senza il consenso dell'utente, salvo obblighi di legge o necessità di fornirli a terzi che prestano servizi in favore del titolare.</p>

<h2>6. Conservazione dei Dati</h2>
<p>I dati personali verranno conservati per il tempo necessario a soddisfare le finalità per cui sono stati raccolti e, successivamente, saranno cancellati in modo sicuro, salvo obblighi legali di conservazione.</p>

<h2>7. Diritti dell'Utente</h2>
<p>L'utente ha il diritto di:</p>
<ul>
    <li>Accedere ai propri dati personali.</li>
    <li>Richiedere la rettifica, cancellazione o limitazione del trattamento dei dati.</li>
    <li>Opporsi al trattamento dei dati per motivi legittimi.</li>
    <li>Ritirare il consenso al trattamento in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima del ritiro.</li>
    <li>Presentare un reclamo presso un'autorità di controllo (ad esempio, il Garante per la protezione dei dati personali).</li>
</ul>
<p>Per esercitare tali diritti, l'utente può contattare il titolare del trattamento all'indirizzo email fornito.</p>

<h2>8. Trasferimento dei Dati</h2>
<p>I dati personali potrebbero essere trasferiti a paesi al di fuori dell'Unione Europea, nel rispetto della legislazione vigente in materia di protezione dei dati.
In tal caso, il titolare adotta tutte le misure necessarie per garantire che il trattamento avvenga in conformità con le normative applicabili.</p>

<h2>9. Modifiche alla Privacy Policy</h2>
<p>Il titolare si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l'indicazione della data dell'ultima revisione. Si consiglia di consultare periodicamente questa Privacy Policy.</p>

<h2>10. Contatti</h2>
<p>Per qualsiasi domanda riguardante il trattamento dei dati personali, l'utente può contattare Stefano Pelizzari all'indirizzo email: <a href="mailto:stefano_pel@live.it">stefano_pel@live.it</a>.</p>



    
<div className="flex gap-4 items-center flex-col sm:flex-row">

</div>
</main>
</div>
<Footer></Footer>
</>
);
}
