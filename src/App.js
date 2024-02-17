import Image from "./Components/Image";
import Title from './Components/Title'
import Description from './Components/Description'
import Skills from './Components/Skills'


function App() {
  return <div className="border-4 border-solid border-black w-[30%] mx-auto my-[100px] flex flex-col justify-center px-4 py-2 gap-2">
    <Image src='CartImage/120212.jpg'/>
    <Title Name="Arafat Hossain"/>
    <Description des='Full-Stack Web Developer and Teacher at Udemy. When Not Coading or Preparing a course, I like to play board games, to cook (and eat), or to just enjoy the bangladeshi sun rises at the bath'/>
    <div className='flex flex-wrap gap-2 my-3 justify-center'>
    <Skills title='HTML+CSS 💪' className='bg-blue-600 text-lg font-medium rounded-lg px-2 py-1 '/>
    <Skills title='JavaScript 💪' className='bg-yellow-500 text-lg font-medium rounded-lg px-2 py-1 '/>
    <Skills title='Web Design 💪' className='bg-green-300 text-lg font-medium rounded-lg px-2 py-1 '/>
    <Skills title='Git and GitHub 👍' className='bg-red-400 text-lg font-medium rounded-lg px-2 py-1 '/>
    <Skills title='React 💪' className='bg-sky-300 text-lg font-medium rounded-lg px-2 py-1 '/>
    <Skills title='Svelte 👶' className='bg-red-600 text-lg font-medium rounded-lg px-2 py-1 '/>
   </div>
  </div>;
}

export default App;