import Link from "next/link";


export default function Home() {

  return (

        <div>
         
         <h2 className="title"> homepage</h2>
         <h4 className="title-sub">bobshop</h4>
         <p className="owner">owner is Kim</p>
            
         <div className="blockstyle">
         <a href="http://localhost:3000/firstpage" > firstpage</a> 
         </div>
      
         <div className="blockstyle">
         <a href="http://localhost:3000/secondpage"> secondpage</a>


         </div>
         
        </div>
      
  );
}
