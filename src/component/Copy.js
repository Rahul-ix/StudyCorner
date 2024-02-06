import '../component/vi.css'
import vone from '../video/Part1.mp4'
import vone2 from '../video/part 2.mp4'
import vone3 from '../video/part 3.mp4'
import vone4 from '../video/part4 pdf.mp4'
import React, { useRef } from "react";

function Copy() {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
      };
      const handlePause = () => {
        videoRef.current.pause();
      };
      const videoRef1 = useRef();
      const handlePlay1 = () => {
          videoRef1.current.play();
        };
        const handlePause1 = () => {
          videoRef1.current.pause();
        };
        const videoRef2 = useRef();
        const handlePlay2 = () => {
            videoRef2.current.play();
          };
          const handlePause2 = () => {
            videoRef2.current.pause();
          };

          const videoRef3 = useRef();
          const handlePlay3 = () => {
              videoRef3.current.play();
            };
            const handlePause3 = () => {
              videoRef3.current.pause();
            };
return (
<div className='body'>
 
 
   <section class="scrollport">
   <h1>SQL</h1>
  <div>
  <h3>PART 1</h3>
  <video  className='b' controls  ref={videoRef} >
          <source src={vone} type="video/mp4" >
          </source>
          
          </video>
          <button class="button-1" role="button" onClick={handlePlay}>Play</button>
        <button class="button-2" role="button"  onClick={handlePause}>Pause</button>  
          </div>
  <div>
  <h3>PART 2</h3>
  <video  className='b' controls ref={videoRef1}>
          <source src={vone2} type="video/mp4" >
          </source>
          
          </video>
          
          <button class="button-1" role="button" onClick={handlePlay1}>Play</button>
        <button class="button-2" role="button"  onClick={handlePause1}>Pause</button>
          </div>
  <div>  <h3>PART 3</h3><video  className='b' controls ref={videoRef2} >
          <source src={vone3} type="video/mp4" >
          </source>
          
          </video>
          <button class="button-1" role="button" onClick={handlePlay2}>Play</button>
        <button class="button-2" role="button"  onClick={handlePause2}>Pause</button>
          </div>
  <div>  <h3>PART 4</h3><video  className='b' controls ref={videoRef3}>
          <source src={vone4} type="video/mp4" >
          </source>
          
          </video>
          <button class="button-1" role="button" onClick={handlePlay3}>Play</button>
        <button class="button-2" role="button"  onClick={handlePause3}>Pause</button>
          </div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
</section>
<section  class="scrollport">
<h1>OOPS</h1>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
</section>
<section  class="scrollport">
<h1>JScript</h1>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
  <div><div class="loader"></div>COMING SOON</div>
</section>
    
 
</div>
)
}
export default Copy