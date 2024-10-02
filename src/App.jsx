import { Box, Image } from "@chakra-ui/react";
import CodeEditor from "./assets/components/CodeEditor.jsx";
import logo from "../src/assets/images/logo.png";
function App() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100px"
        fontSize="2xl"
        textAlign="center"
      >
<Image src={logo} alt="logo" h="95px" w="105px" mr={4} /> {/* Adjust height and width */}
AI-Powered Code editor by V-Jobs!
      </Box>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
    </>
  );
}

export default App;
