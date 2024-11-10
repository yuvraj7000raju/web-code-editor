import "./home.css";

const Home = ({ setEditor }) => {
    return (
      <>
      <div className="main-con">
      <div class="typewriter">
  <h1>CodeCraft</h1>
</div>
        <ul>
            <li>"Unleash Your Code, Anytime"</li>
            <li>"All-in-One Code Editor: Type, Run, Succeed"</li>
            <li>"Run Code Instantly in Any Language"</li>
        </ul>
        <button onClick={()=>setEditor(true)}>
            Start Coding
        </button>
      </div>
      </>
    );
  };
  export default Home;
  