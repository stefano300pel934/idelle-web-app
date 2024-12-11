import React from 'react'; 
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'
 
 
const Footer = () => { 
  return ( 
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="font-light text-xs">Copyright © 2024 Idelle</div> 
        <a href="/privacy-policy" className="font-light text-xs">Privacy Policy</a>
        <a href="/cookie-policy" className="font-light text-xs">Cookie Policy</a>
        <div className="font-light text-xs">P.IVA 04592400982</div>
<>
<GoogleTagManager gtmId="GTM-M22W64G2" />
<Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16785993710"></Script>
<Script id='google-ads'>
{ ` 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-16785993710');
 ` }
</Script>
</>
    </footer>
        
  ); 
}; 
 
export default Footer; 