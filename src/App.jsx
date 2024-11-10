import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import { useState } from "react";
function App() {
  const[Editor, setEditor] = useState(false);
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      {
        Editor ? <CodeEditor /> : <Home setEditor={setEditor} />
      }
    </Box>
  );
}

export default App;
