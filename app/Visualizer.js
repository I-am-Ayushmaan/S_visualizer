import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BuildGrid from '@/components/BuildGrid';
import {Flex, Box, VStack, Divider } from "@chakra-ui/react";
import Algorithm from '../pages/Algorithm';



const Visualizer = () => {
  const [formState, setFormState] = useState({
    size: 10,
    algo1: "Bubble-sort",
    algo2: "Bubble-sort",
  });
  useEffect(()=>{
    console.log(formState.size)
    console.log(formState.algo2)
    console.log(formState.algo1)
   },[formState])

  
  const [generating, setGenerating] = useState(false);
 

  const [Swap_a1,setSwap_a1] = useState(0);  // for screen first (a)
  const [Swap_a2,setSwap_a2] = useState(0);
  const [sorting_a, setSorting_a] = useState(false);
  const [rendering_a,setRendering_a] = useState(true);
  const [arr_a, setArr_a] = useState([]);
  const [cur_a,setCur_a] = useState(0);
  const [animationFrames_a, setAnimationFrames_a] = useState([]);
  const [control_a,setc_a] = useState(true)

  const [Swap_b1,setSwap_b1] = useState(0);  // for screen second (b)
  const [Swap_b2,setSwap_b2] = useState(0);
  const [sorting_b, setSorting_b] = useState(false);
  const [rendering_b,setRendering_b] = useState(true);
  const [arr_b, setArr_b] = useState([]);
  const [cur_b,setCur_b] = useState(0);
  const [animationFrames_b, setAnimationFrames_b] = useState([]);
  const [control_b,setc_b] = useState(true)

  


  const generateArr = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
      let random = Math.floor(Math.random() * (250 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr_a([...newArr]);
      setArr_b([...newArr]);
      setGenerating(false);
    }, 500);
  };
    
 
  useEffect(() => {
    generateArr({ size: 10 });
  }, []);

  const sort = () => {
    setSorting_a(true)
    setSorting_b(true)
  };
  useEffect(()=>{
    console.log('updt',sorting_a)
    console.log('render',rendering_a)
    console.log('cntr',control_a)
  },[sorting_a,sorting_b]);
  // ,animationFrames_a,animationFrames_b


  return (
    <> 
     <Header/>
      <VStack width={"100%"} alignItems={"stretch"}>
        <Sidebar
          generateArr={generateArr}
          sort={sort}
          sorting_a={sorting_a}
          sorting_b={sorting_b}
          formState={formState}
          setFormState={setFormState}
        />
       
        <BuildGrid data={arr_a} s1={Swap_a1} s2={Swap_a2} setSorting={setSorting_a} setswap1={setSwap_a1}
          setswap2={setSwap_a2} setArr={setArr_a} algo={formState.algo1} sorting={sorting_a} rendering={rendering_a}
         setRendering={setRendering_a} cur={cur_a} setCur={setCur_a} cntrl={control_a} setcntrl={setc_a}
          animationFrames={animationFrames_b}   setAnimationFrames={ setAnimationFrames_b}/>

        <BuildGrid data={arr_b} s1={Swap_b1} s2={Swap_b2} setSorting={setSorting_b} setswap1={setSwap_b1}
          setswap2={setSwap_b2} setArr={setArr_b}  algo={formState.algo2} sorting={sorting_b} rendering={rendering_b}
          setRendering={setRendering_b} cur={cur_b} setCur={setCur_b} cntrl={control_b} setcntrl={setc_b}
          animationFrames={animationFrames_a}   setAnimationFrames={ setAnimationFrames_a}/>

     </VStack>
 
    </>
  )
};

export default Visualizer