import CardContainer from "./components/CardComponent/CardContainer";
import Demo from "./components/CardComponent/Demo/Demo";
import DateAndTime from "./components/DateAndTime";
import User from "./components/UserComponent/User";
import userInfo from "./UserData/userData.json";


function App() {
  return (
    <>
   {/* <CardContainer /> */}
   {/* <DateAndTime /> */}

   {/* <Demo  name = "Md Shakil Hossain" desc= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos soluta id perspiciatis magni voluptas veniam! Laboriosam iure commodi assumenda temporibus doloremque, ad minus quibusdam totam ratione aliquam molestiae a tempore."/>
   <Demo name = "Akash" desc= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique doloremque voluptatem, fuga molestias iusto eveniet unde vitae ullam mollitia consectetur!" />
   <Demo name = "Shamim" desc= "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, officia" />
   <Demo name = "Milon" desc= "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam mollitia blanditiis ut veniam maxime necessitatibus officiis, accusamus quaerat incidunt aspernatur nihil rem iusto totam, hic repellendus laborum, praesentium neque" />
   <Demo name = "Shakib" desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi, rem modi impedit porro esse voluptate sapiente suscipit quisquam ducimus, perspiciatis maiores, cum nam ratione reiciendis officiis vel obcaecati saepe enim. Officiis delectus ullam amet natus sequi, veritatis itaque error dolorem excepturi? Sequi, ut nulla." /> */}


     {userInfo.map(({name, skill, age})=>(
        <User name={name} skill = {skill} age={age}/>
     ))}
   

   {/* or */}

    {/* {userInfo.map((data)=>(
        <User name={data.name} skill = {data.skill} age={data.age}/>
     ))} */}


    </>
  )
}

export default App;
