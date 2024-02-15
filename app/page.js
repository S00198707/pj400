import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeProduce from "../components/layout/HomeProduce";
import SHeaders from "../components/layout/SHeaders";
export default function Home() {
  return (
  <>
  <Hero />
  <HomeProduce />
  <section className="text-center my-16">
<SHeaders
subHeader={'Our Story'}
mainHeader={'About Us'}
/>
<div className="text-gray-600 max-w-l mx-auto mt-6 flex flex-col gap-4">
<p>Farm2Table Connect is a dedicated platform that connects consumers directly to local farmers in Ireland. 
  We are passionate about supporting local agriculture and providing fresh, homegrown produce to our customers. 
  Through our platform, we collaborate with local farmers and approved international growers to ensure a diverse range of high-quality products is readily available to meet the needs of our customers.
</p>
<p>Our customer base includes a diverse range of individuals and businesses, such as households, restaurants and more. Our commitment to innovation means that our platform continually evolves to meet the changing demands of consumers.
</p>
<p> We take pride in creating a direct link between farmers and consumers, fostering a stronger connection to the source of our food.
</p>
</div>
  </section>
  <section className="text-center my-8">
  <SHeaders
  subHeader={'Don\'t Hesitate'}
  mainHeader={'Contact Us'}
  />
  <div className="mt-8">
  <a className="text-3xl underline text-gray-500" href="Tel:+353 898 765 4121">353 898 765 4121</a>
  </div>
  </section>
  </>
  )
}
