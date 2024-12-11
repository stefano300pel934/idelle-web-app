"use client";
import TextTyper from "@/components/TextTyper";
import { NavigationMenuDemo } from "../menu";
import Footer from "@/components/ui/footer";

export default function Contatti() {

  const title = "Contatti";

  return (
    <><header className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-6">

    <NavigationMenuDemo></NavigationMenuDemo>

    </header>
  
  
   
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20">
    
    <h1 className="mt-10 relative white-spaces-nowrap max-w-fit text-4xl text-center  mx-4 mb-2"><TextTyper  text={title} interval={30} Markup={"code"} /></h1>
  
     
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="">
            <p className="max-w-fit">
              Se visitando il sito web hai notato qualcosa che ti ha incuriosito scrivimi.
            </p>
          </div>
          <ol className="list-inside list-disc text-sm text-center sm:text-left">
            <li>
            stefano_pel@live.it
          
            </li>
              <p className="justify-self-center flex my-8">
              Whatsapp:
              </p>
            <li>
             
              +39 3371117277
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">

          </div>
        </main>
     <Footer></Footer>
      </div></>
  );
}
