
import items from "../assets/items"
import schema from "../assets/schema"
import Head from 'next/head';
import SocialLink from '../components/SocialLink';
const IndexPage = () => {    
   return ( 
<>
<Head>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="monetization" content="$ilp.uphold.com/AP3WxENXk6jn"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yorgo Khawand</title>
        <meta name="description" content="Yorgo's Links"/>
        <meta property="og:url" content="https://yorgo.eu.org"/>
        <meta property='og:image' content='images/og-image.png'/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Yorgo Khawand"/>
        <meta property="og:description" content="Yorgo's Links"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="https://yorgo.eu.org"/>
        <meta property="twitter:url" content="https://yorgo.eu.org"/>
        <meta name="twitter:title" content="Yorgo Khawand"/>
        <meta name="twitter:description" content="Yorgo Khawand"/>
</Head>
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
<section className="pt-16 bg-blueGray-50">
  <div className="w-full lg:w-4/12 px-4 mx-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-10 py-2 flex justify-center">
            <div className="relative">
              <img
                alt="Yorgo Khawand"
                src="/images/profile.png"
                className="rounded-full max-w-full h-auto w-32 h-32"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
            Yorgo Khawand
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
            Beirut, Lebanon
          </div>
          <div className="mb-2 text-blueGray-600 mt-2">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
            Software Developer
          </div>
          <div className="mb-2 text-blueGray-600 mt-2">
            <i className="fas fa-message-quote mr-2 text-lg text-blueGray-400" />
            ``~Software is a great combination between artistry and engineering 🔥``
          </div>
        </div>  
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        {items.map((item, i) => {
          return (
            <SocialLink
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              color={item.color}
              link={item.link}
              icon={item.icon}
            ></SocialLink>
          );
        })}
        </div>
      </div>
    </div>
  </div>
</section>
</>


)
    }

export default IndexPage