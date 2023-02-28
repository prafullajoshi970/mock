import React from 'react'
import img1 from './images/img1.bmp'
import img2 from './images/img2.bmp'
import img3 from './images/img3.bmp'
import img4 from './images/img4.bmp'
import img5 from './images/img5.bmp'
import img6 from './images/img6.bmp'
import img7 from './images/img7.bmp'
import img8 from './images/img8.bmp'
import img9 from './images/img9.bmp'
import { useState } from 'react'

function App() {
  const [changeImg, setchangeImg] = useState(0)

  const [imgData, setimageData] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9])
  console.log(setimageData)
  const [Name, setName] = useState(["Anushka Bhatiya", "Genelia Rutherford", "Mangesh Verma ", "Sara Khan", "Ganesh Dixit", "Alia Jaiswal", "Robert Smith", "Chris Jordan", "Priya Sharma"])
  console.log(setName)
  const [experiance, setExperiance] = useState(["Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way",
    "Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of what it would look like working in the industry. The mock interviews gruelled me a lot before the actual interview and hence I went to interview knowing what to expect. Today I am successfully placed a a software developer at Bluewud",
    "Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way",
    "Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of what it would look like working in the industry. The mock interviews gruelled me a lot before the actual interview and hence I went to interview knowing what to expect. Today I am successfully placed a a software developer at Bluewud",
    "Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way",
    "Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of what it would look like working in the industry. The mock interviews gruelled me a lot before the actual interview and hence I went to interview knowing what to expect. Today I am successfully placed a a software developer at Bluewud",
    "Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way",
    "Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of what it would look like working in the industry. The mock interviews gruelled me a lot before the actual interview and hence I went to interview knowing what to expect. Today I am successfully placed a a software developer at Bluewud", "Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way",
    "Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of what it would look like working in the industry. The mock interviews gruelled me a lot before the actual interview and hence I went to interview knowing what to expect. Today I am successfully placed a a software developer at Bluewud",
  ])
  console.log(setExperiance)

  const nextImg = () => {
    if (changeImg < 8) { setchangeImg(changeImg + 1) } else {
      setchangeImg(0)
    }
  }

  const prevImg = () => {
    if (changeImg <= 0) { setchangeImg(8) } else { setchangeImg(changeImg - 1) }
  }


  return (<>
    <div className='header'><h1 style={{ color: "white" }}> <span style={{ color: "green" }} >Tousands</span> Of Live Changed</h1>
    </div>

    <div className='header'><p className='parahead'>Here it from the ones who have been his journey already</p>
    </div>

    <div className="App">

      <div className='leftimgcard'>
        <img className='leftimg' src={img1} alt="#1" style={{ filter: changeImg === 0 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='leftimg' src={img2} alt="#1" style={{ filter: changeImg === 1 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='leftimg' src={img3} alt="#1" style={{ filter: changeImg === 2 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='leftimg' src={img4} alt="#1" style={{ filter: changeImg === 3 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='leftimg' src={img5} alt="#1" style={{ filter: changeImg === 4 ? 'none' : 'blur(1.5px)' }}></img></div>

      <div className='middleCard'>
        <button type='submit' onClick={prevImg} >prev</button>

        <div className="card"><div><img src={imgData[changeImg]} alt='#' />
          <h4>{Name[changeImg]}</h4></div>

          <div>
            <p>{experiance[changeImg]}</p></div>   </div>
        <button type='submit' onClick={nextImg}> next</button>
      </div>

      <div className='rightimgcard'>

        <img className='rightimg' src={img6} alt="#1" style={{ filter: changeImg === 5 ? 'none' : 'blur(1.5px)' }} ></img>
        <img className='rightimg' src={img7} alt="#1" style={{ filter: changeImg === 6 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='rightimg' src={img8} alt="#1" style={{ filter: changeImg === 7 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='rightimg' src={img9} alt="#1" style={{ filter: changeImg === 8 ? 'none' : 'blur(1.5px)' }}></img>
        <img className='rightimg' src={img1} alt="#1" style={{ filter: changeImg === 0 ? 'none' : 'blur(1.5px)' }}></img>

      </div>


    </div>
    <div className='footerdiv'><h3 className='footer'>Read More</h3></div>
  </>
  )
}

export default App