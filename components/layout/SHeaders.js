export default function SHeaders({subHeader,mainHeader}){

    return(
<>

<h3 className="uppercase text-gray-600 font-semibold">
    {subHeader}
    </h3>
<h2 className="text-primary bold text-4xl italic">
    {mainHeader}
    </h2>

</>

    );
}