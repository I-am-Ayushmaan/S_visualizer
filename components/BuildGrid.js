import { Box,useColorMode ,Flex } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import Algorithm from '../pages/Algorithm';
 
const BuildGrid = ({ data ,s1 ,s2, setSorting, setswap1, setswap2, setArr,
   algo, sorting, rendering, setRendering, cur, cntrl ,setcntrl,
   setCur,animationFrames, setAnimationFrames}) => {
    const { colorMode } = useColorMode();
    const clr = colorMode === "dark" ? "black" : "gray.100";

  const run =()=>{
      Algorithm.get(algo)(data,setswap1,setswap2,setArr,setSorting,cur,setCur);
   }
  
  if(rendering && sorting){
    useEffect(()=>{
      setRendering(false);
    },[rendering])
    console.log('srt',sorting);
    console.log('redr',rendering);
    run();
  }
  if(sorting===false){
      setRendering(true)
  }


  return (
   <Flex height={'30vh'} mb={18}>
    <Box
      rounded={"lg"}
      display="grid"
      gridAutoFlow={"column"}
      gridAutoColumns={"auto"}
      bg={clr}
      borderWidth={"1px"} 
      borderColor={"blue.500"}
      minH={"full"}
      overflow={"auto"}
      m={4}
      flex="1"
    >
      {Array.isArray(data) && data.map((d,ind) => {
        
        return (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            textAlign="center"
            flexDirection="column"
            key={ind}
          >
            
            {/* <p>{d}</p> */}
         
            <Box
             roundedTop={"sm"}
             mr={1}
             ml={ind==0?1:0}
             bg={ind === s1 || ind === s2 ? "red" :"teal.300" }
             style={{ height: `${d}px` }}
            >
            </Box>
          
          </Box>
        );
      })}
    </Box>
    </Flex>  
  );
};
export default BuildGrid;