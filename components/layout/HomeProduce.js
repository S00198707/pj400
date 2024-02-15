import Image from "next/image";
import Menuitem from "./Menu/Menuitem";
import SHeaders from "./SHeaders";


export default function HomeProduce(){
   return(
<section className="">
<div className="absolute  left-0 right-0 w-full justify-start overflow-x-hidden">
    <div className="h-48 w-48 absolute -left-12">
    <Image src ={'/salad1.jpg'} layout={'fill'} 
    objectFit={'contain'} alt={'saladd'} />
    </div>
    <div className="h-48 w-48 absolute -top-34 -right-12 z-10">
    <Image src ={'/salad2.jpg'} width={'192'} height={'192'} alt={'saladd'} />
    </div>
</div>
<div className="text-center mb-5">
<SHeaders 
subHeader={'Check Out'}
mainHeader={'Goods For You!'}/>
    </div>
<div className="grid grid-cols-3 gap-4">

<Menuitem />
<Menuitem />
<Menuitem />
<Menuitem />
<Menuitem />
<Menuitem />
</div>
</section>
   ); 
}