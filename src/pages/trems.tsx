import "../../styles/globals.css"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms and Conditions - netialap.com",
 

};

function terms() {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center shadow-md">
     

   
      <div className="max-w-3xl mx-auto container py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions </h1>

        <div className="text-lg mb-8">
          <p>
            By accessing Netialap.com, you agree to be bound by these Terms and
            Conditions of Use, all applicable laws and regulations, and agree
            that you are responsible for compliance with any applicable local
            laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials
            contained in this website are protected by applicable copyright and
            trademark law.
          </p>
        </div>

        <div className="text-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Use License</h2>

          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Netialap.com for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Netialap.com;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or mirror the materials
              on any other server.
            </li>
          </ul>

          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Netialap.com at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
        </div>

        <div className="text-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>

          <p>
            The materials on Netialap.com  are provided as is. Netialap.com Pulse
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties, including without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights. Further, Netialap.com does not warrant
            or make any representations concerning the accuracy, likely results,
            or reliability of the use of the materials on its website or
            otherwise relating to such materials or on any sites linked to this
            site.
          </p>
        </div>

        <div className="text-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitations</h2>

          <p>
            In no event shall Netialap.com  or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Netialap.com , even if Netialap.com
            Pulse or a Netialap.com Pulse authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
        </div>


       
        </div>
      </div>
  );
}

export default terms;


//make a function?
