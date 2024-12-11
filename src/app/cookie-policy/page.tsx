"use client";
import TextTyper from "@/components/TextTyper";
import { NavigationMenuDemo } from "../menu";
import Footer from "@/components/ui/footer";

export default function CookiePolicy() {

  const title = "Cookie Policy";

  return (
    <><header className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-6">

    <NavigationMenuDemo></NavigationMenuDemo>

    </header>
  
  
   
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:px-48 py-10">
 
    <h1 className="mt-10 relative white-spaces-nowrap max-w-fit text-4xl text-center  mx-5 mb-4">{title}</h1>
  
     
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
           
        

    <p>La presente Cookie Policy descrive le modalità di utilizzo dei cookie e delle tecnologie simili sul sito web gestito da Stefano Pelizzari.</p>

    <h2>1. Cosa Sono i Cookie?</h2>
    <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente (computer, smartphone, tablet) durante la navigazione su un sito web. Essi permettono al sito di riconoscere l'utente in futuro e di memorizzare alcune informazioni, come le preferenze di navigazione.</p>

    <h2>2. Tipologie di Cookie Utilizzati</h2>
    <h3>Cookie tecnici</h3>
    <p>Questi cookie sono essenziali per il corretto funzionamento del sito e per la fruizione dei suoi servizi. Non richiedono il consenso dell'utente.</p>
    <ul>
        <li><strong>Cookie di navigazione</strong>: Permettono di navigare nel sito e di utilizzarne le funzionalità principali (ad esempio, la gestione di sessioni utente).</li>
        <li><strong>Cookie analitici</strong>: Sono utilizzati per raccogliere informazioni sul comportamento degli utenti sul sito, in modo da migliorare la qualità del servizio. Questi cookie possono essere gestiti in forma anonima, senza tracciare l'identità dell'utente.</li>
    </ul>

    <h3>Cookie di terze parti</h3>
    <p>Alcuni cookie sono impostati da servizi esterni al sito, come social media, analisi statistiche o pubblicità. Questi cookie sono gestiti da terze parti, che possono raccogliere informazioni anche a fini di profilazione. Esempi includono cookie di Google Analytics, Facebook, YouTube, ecc.</p>

    <h3>Cookie di profilazione</h3>
    <p>Questi cookie vengono utilizzati per tracciare le abitudini di navigazione degli utenti e per offrire contenuti personalizzati o pubblicità mirata. Questi cookie richiedono il consenso dell'utente.</p>

    <h2>3. Finalità dei Cookie</h2>
    <ul>
        <li><strong>Cookie tecnici</strong>: Necessari per il funzionamento del sito.</li>
        <li><strong>Cookie analitici</strong>: Per raccogliere dati statistici sull’utilizzo del sito (ad esempio, il numero di visitatori, le pagine visitate, la durata delle visite) per migliorarne le performance.</li>
        <li><strong>Cookie di profilazione e marketing</strong>: Per inviare pubblicità personalizzate e per analizzare le preferenze degli utenti, al fine di migliorare la qualità dei contenuti e delle offerte.</li>
    </ul>

    <h2>4. Gestione dei Cookie</h2>
    <p>L'utente può decidere di accettare o rifiutare i cookie attraverso le impostazioni del proprio browser. È possibile configurare il browser per:</p>
    <ul>
        <li>Rifiutare i cookie di terze parti.</li>
        <li>Avvisare ogni volta che un cookie viene inviato.</li>
        <li>Disabilitare i cookie.</li>
    </ul>
    <p>Le modalità per gestire i cookie dipendono dal browser utilizzato. Di seguito sono riportate le indicazioni per i principali browser:</p>
    <ul>
        <li><strong>Google Chrome</strong>: Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti.</li>
        <li><strong>Mozilla Firefox</strong>: Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti.</li>
        <li><strong>Safari</strong>: Preferenze &gt; Privacy &gt; Cookie e dati dei siti web.</li>
        <li><strong>Microsoft Edge</strong>: Impostazioni &gt; Privacy, ricerca e servizi &gt; Cookie.</li>
    </ul>
    <p>L'utente può anche utilizzare strumenti online per gestire in modo più dettagliato i cookie.</p>

    <h2>5. Consenso e Revoca</h2>
    <p>Accedendo al sito, l'utente è informato sull'uso dei cookie tramite un banner che appare la prima volta che si visita il sito. L'utente può accettare i cookie cliccando sul pulsante "Accetta", oppure può scegliere di configurare i propri consensi cliccando su "Gestisci preferenze".</p>
<p>L'utente può anche revocare il proprio consenso in qualsiasi momento, modificando le impostazioni del browser o utilizzando il pannello di gestione dei cookie, se disponibile.</p>

    <h2>6. Durata dei Cookie</h2>
    <p>I cookie hanno una durata variabile, che può essere:</p>
    <ul>
        <li><strong>Sessione</strong>: I cookie vengono eliminati quando l'utente chiude il browser.</li>
        <li><strong>Persistenti</strong>: I cookie rimangono memorizzati sul dispositivo dell'utente per un periodo di tempo specificato e vengono utilizzati per tracciare la navigazione su più sessioni.</li>
    </ul>

    <h2>7. Terze Parti</h2>
    <p>I cookie di terze parti possono raccogliere informazioni anche per finalità proprie, come la profilazione dell'utente o l'invio di pubblicità mirata. Per ulteriori informazioni sull'uso dei cookie da parte di terzi, l'utente può consultare le relative politiche sulla privacy e cookie, ad esempio:</p>
    <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank">Google Analytics - Privacy Policy</a></li>
        <li><a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook - Cookie Policy</a></li>
        <li><a href="https://www.youtube.com/static?template=privacy_guidelines" target="_blank">YouTube - Cookie Policy</a></li>
    </ul>

    <h2>8. Modifiche alla Cookie Policy</h2>
    <p>Stefano Pelizzari si riserva il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l'indicazione della data dell'ultima revisione. Si consiglia di consultare periodicamente questa Cookie Policy.</p>

    <h2>9. Contatti</h2>
    <p>Per qualsiasi domanda riguardante l'uso dei cookie, l'utente può contattare Stefano Pelizzari all'indirizzo email: <a href="mailto:stefano_pel@live.it">stefano_pel@live.it</a>.</p>

    
<div className="flex gap-4 items-center flex-col sm:flex-row">

</div>
</main>
</div>
<Footer></Footer>
</>
);
}
