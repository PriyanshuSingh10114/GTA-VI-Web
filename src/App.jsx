import React,{useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import './App.css'

function App() {
  let [showContent,setShowContent]=useState(false);
  useGSAP(()=>{
    const tl=gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",  
      transformOrigin:"50% 50%",
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease: "Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>=.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }

    })
  });

  useGSAP(()=>{

    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-0.2",
      ease:"Expo.easeInOut",
    });

    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-0.6",
      ease:"Expo.easeInOut",
    });

    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-0.6",
      ease:"Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  },[showContent]);

  return (
    <div>
      
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.5]'> 
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-7'>
                <div className='lines flex flex-col items-center gap-1'>
                  <div className='line w-10 h-1 bg-white'></div>
                  <div className='line w-8 h-1 bg-white'></div>
                  <div className='line w-6 h-1 bg-white'></div>
                </div>
                <h1 className='text-4xl -mt-[8px] leading:none text-white'>RockStar</h1>
              </div>
            </div>

            <div className='imagesdiv relative overflow-hidden w-full h-screen'>

              <img className=" sky absolute scale-[1.8] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className=" bg absolute scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />

              <div className='text text-white flex flex-col absolute top-5 left-1/2 -translate-x-1/2 leading-[10rem]'>
              <h1 className='text-[8rem] -ml-40'leading:none>grand</h1>
              <h1 className='text-[8rem] ml-10'leading:none>theft</h1>
              <h1 className='text-[8rem] -ml-40'leading:none>auto</h1>
              </div>

              <img className="character absolute -bottom-[20%] top-0 left-1/2 -translate-x-1/2 scale-[0.8] " src="./girlbg.png" alt=""/>
              <img className="logo18 absolute -bottom-[20%] top-1/5 left-12/20 -translate-x-1/2 scale-[0.2] " src="./logo18.png" alt="" />
            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent '>
              <div className='flex gap-4'>
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className='text-xl-font-[Helvetica_Now_Display]'>Scroll Down</h3>
              </div>
              <img className='ps5img absolute h-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 'src="./ps5.png" alt="" />
            </div>
          </div>
        </div>
      )}


      <section className="relative w-full px-[8%] lg:px-[12%] py-[80px] bg-[#0b0b0b] overflow-hidden">

        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#111] z-0" />
        <div className="absolute left-[-120px] top-[200px] w-[420px] h-[420px] bg-[#f5b754]/10 rounded-full blur-3xl" />
        <div className="absolute right-[-150px] bottom-[150px] w-[380px] h-[380px] bg-[#f5b754]/10 rounded-full blur-3xl" />

        {/* Heading */}
        <div className="relative text-center z-15 mb-20">
          <p className="uppercase text-lg tracking-[10px] text-[#f5b754] mb-5">
            Vice City Moments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-bricolage text-white mb-6">
            Vice City <span className="text-[#f5b754]">Gallery</span>
          </h2>
        </div>

        {/* Gallery Scroll */}
        <div className="relative z-10 overflow-x-auto no-scrollbar">
          <div className="flex gap-10 w-max pb-10">

            {[
              { img: "./img_1.png", title: "Neon Streets" },
              { img: "./img_2.png", title: "High-Speed Chase" },
              { img: "./img_3.png", title: "Vice City Beach" },
              { img: "./img_4.png", title: "City Sky view" },
              { img: "./img_5.png", title: "Criminals Hideout"},
            ].map((item, i) => (
              <div
                key={i}
                className="group relative min-w-[500px] h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-black/40
                transition-all duration-700 hover:-translate-y-2 hover:shadow-[#f5b754]/30"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Title */}
                <h3 className="absolute top-6 left-6 text-white text-2xl font-semibold font-bricolage tracking-wide
                  group-hover:text-[#f5b754] transition-colors duration-500 drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#f5b754] to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>



      <div className="w-full h-screen flex px-10 items-center justify-center bg-black">
        <div className='cntnr flex text-white w-full h-[80%]'>

          <div className='limg relative w-1/2 h-full '>
          <img className="absolute scale-[0.78] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "src="./imag.png" alt="" />
          </div>
          <div className='rg w-[40%]'>
            <h1 className='text-4xl'>Still Running,</h1>
            <h1 className='text-4xl'>Not Hunting</h1>
            
            <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Grand Theft Auto VI is set to return to the neon-soaked streets of Vice City, Rockstar’s Miami-inspired open world, with rumors suggesting an expanded map including surrounding swamps and smaller towns.
              <br />
              <br />
              The game will reportedly feature dual protagonists—Lucia, the franchise’s first female lead, and Jason male partner—in a crime-driven storyline reminiscent of Bonnie & Clyde.
            </p>
            <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>While Rockstar has confirmed a 2026 release, platforms remain unconfirmed, and anticipation continues to build as players dissect every frame of available footage for hidden clues. Until official details emerge, much of the hype remains fueled by insider leaks and community theories.
            </p>
            <a href="https://www.rockstargames.com/" target="_blank" rel="">
            <button className="bg-yellow-500 absolute px-6 py-6 text-2xl text-black mt-8">
            Download Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
