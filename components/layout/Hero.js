import Image from "next/image";
import Right from "./icons/right";

export default function Hero(){
return (
<section className="hero mt-6">
    <div className="py-12">
    <h1 className="text-4xl font-semibold">The Freshest Goods&nbsp;
    <span className="text-primary">
    Straight To Your Table
    </span>
    
     </h1>
    <p className="my-6 text-gray-500 text-sm">Our Fresh and locally sourced goods are the missing piece you've been looking for, its time to connect!
    </p>

<div className="flex justify-center gap-4 text-sm">
<button className="bg-primary items-center flex gap-2 text-white px-5 py-2 rounded-full">
    Order Now
    <Right />
    </button>
<button className="flex items-center border-0 gap-2 py-2 text-gray-800 font-semibold">
    Find Out More
    <Right />
    </button>
</div>
    </div>  
    <div className="relative">
    <Image src={'/vegetablebox.jpg'} layout={'fill'} objectFit={'contain'} alt={'vegetables'} />
    </div>
</section>
);
}