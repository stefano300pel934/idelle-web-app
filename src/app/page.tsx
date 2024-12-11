"use client";
import { NavigationMenuDemo } from "./menu";
import TextTyper from "../components/TextTyper";
import Footer from "@/components/ui/footer";







export default function Home() {
  
  const title = "Consulente di marketing per pmi e professionisti";


  
//<h1 className="mt-10 relative white-spaces-nowrap max-w-fit text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white text-center ">
  
  return (
 <><header className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-4">

      <NavigationMenuDemo></NavigationMenuDemo>

    </header>





      <title>Stefano Pelizzari - consulente web marketing </title>
      <div className="grid  items-center justify-items-center min-h-screen gap-4 px-4 sm:p-20">
      <script type="text/javascript" charSet="UTF-8" src="//cdn.cookie-script.com/s/ceafed48c43b8cb6289aaa4059b2efcf.js"></script>
        <h1 className="mt-10 relative white-spaces-nowrap max-w-fit text-4xl text-center  mx-4">{title}</h1>


        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        

          <p className="max-w-fit text-xl pt-2">
            Posso aiutarti nella costruzione della tua immagine online. Siti web, applicazioni, scrittura di articoli o gestione della newsletter.
            Se non possiamo incontrarci di persona possiamo organizzare una videocall dove mi racconti ciò di cui hai bisogno.
          </p>





          <div className="flex gap-4 items-center flex-col sm:flex-row ">


            <a href="/siti-web-performanti-per-aziende" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Siti vetrina</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">A nessuno piace vedere una pagina bianca quando clicchi un bottone.
                Ecco perch&egrave; &egrave; opportuno avere un sito web ottimizzato (non solo per la SEO) ma anche per le prestazioni di caricamento.&nbsp;
                La maggior parte degli utenti abbandona una pagina gi&agrave; dopo un solo secondo di caricamento.</p>
            </a>
            <a href="/copywriter-web" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Copywriter Seo</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Aumenta la visibilità online con contenuti strategici! Come copywriter SEO, creo testi ottimizzati per i motori di ricerca che migliorano il posizionamento del tuo sito e attraggono il pubblico giusto. Ogni parola è pensata per convertire, senza sacrificare la qualità e l'autenticità. Scrivo anche per l'offline </p>
            </a>
            <a href="/consulente-web-marketing" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Strategia e analisi</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Analizzo i tuoi dati. Dal gestionale al CRM per dare coerenza alle scelte che compierai in azienda. Posso anche creare banche dati profilate e a norma di GDPR, in modo da poterle utilizzare per inviare comunicazioni commerciali e/o di marketing. Posso gestire il flusso di dati di marketing ed elaborare una strategia insieme a te</p>
            </a>

          </div>
      
        </main>
        <Footer></Footer>
      </div>  </>
  );
}



