import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const Tribute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
          return;
        }
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        //console.log('Decoded Token:', decodedToken);
        console.log(decodedToken.user);
      } catch (error) {
        console.error(error.message);
      }
    };
    validateToken();
  }, [navigate]);
  return (
    <div className="bg-black text-white font-mono">
    <div className=" p-8 bg-black border-2 border-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center underline">A.R Rahman</h1>
      <div className="mb-6">
        <img
          className="w-10/12 rounded-lg flex ml-36 border-2 border-white"
          src="https://e0.pxfuel.com/wallpapers/964/616/desktop-wallpaper-ar-rahman-best-and-a-r-rahman.jpg"
          alt="Tribute Image"
        />
      </div>
      <div className="text-lg leading-relaxed ml-36 mr-36 text-justify selection:bg-white selection:text-black">
      <p>A.R. Rahman, often hailed as the Mozart of Madras, stands as a towering figure in the world of music, enchanting audiences globally with his unparalleled artistry. Born as A. S. Dileep Kumar on a Monday in October, Rahman's musical journey began in the vibrant city of Chennai. Though lacking fingers, his hands became the conduit for a symphony that would captivate hearts and transcend cultural boundaries.</p>
<br></br>
<p>The turning point in Rahman's illustrious career came with the release of the soundtrack for "Roja" in 1992. The hauntingly beautiful melodies showcased a fusion of traditional Indian tunes and contemporary sounds, marking a revolutionary departure in the landscape of Indian film music. The musical narrative spun by Rahman touched a chord with listeners, earning him widespread acclaim and setting the stage for an extraordinary career.</p>
<br></br>
<p>Rahman's prowess lies not only in his ability to compose captivating tunes but also in his aptitude for experimentation. From the soul-stirring tunes of "Bombay" to the high-energy beats of "Lagaan" and the ethereal soundtrack of "Dil Se," Rahman has consistently pushed the boundaries of musical expression. His compositions are a tapestry woven with intricate layers, blending classical ragas with cutting-edge technology, creating a sonic experience that resonates with diverse audiences.</p>
<br></br>
<p>Beyond the accolades and awards, Rahman's music serves as a cultural bridge, transcending linguistic and geographical barriers. Collaborating with luminaries like Lata Mangeshkar, Gulzar, and international artists like Andrew Lloyd Webber, he has showcased the universality of his craft. Each note he crafts is a testament to the power of music as a unifying force in a fragmented world.</p>
<br></br>
<p>Monday, often deemed the most productive day of the week, becomes a fitting backdrop to celebrate Rahman's prolific output. As we take deep breaths and navigate the steps of this tribute, let's acknowledge not just the melodies that have etched themselves into our hearts but also Rahman's philanthropic endeavors. His commitment to social causes, evident in initiatives like the Sunshine Orchestra, reflects a profound understanding of the transformative power of music beyond entertainment.</p>
<br></br>
<p>In the heart of October's productivity, we raise our metaphorical baton in honor of A.R. Rahman, an expert in orchestrating emotions and a maestro whose compositions echo in the collective consciousness of music lovers worldwide. So, on this Monday, let the strains of Rahman's music guide us through a journey that transcends time and space, reminding us that, indeed, "<strong>YOU CAN DO IT.</strong>"</p>
<br></br>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">Source: AI Generated</p>
      </div>
    </div>
    </div>
  );
};

export default Tribute;
