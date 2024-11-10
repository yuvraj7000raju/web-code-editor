import "./home.css";

const Home = ({ language, onSelect }) => {
    return (
      <>
      <div className="main">
      <div class="typewriter">
  <h1>CodeCraft</h1>
</div>
        <ul>
            <li>"Unleash Your Code, Anytime"</li>
            <li>"All-in-One Code Editor: Type, Run, Succeed"</li>
            <li>"Run Code Instantly in Any Language"</li>
        </ul>
        <button>
            Start Coding
        </button>
      </div>
      </>
    );
  };
  export default Home;
  