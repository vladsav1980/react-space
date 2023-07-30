import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Home from "./routes/Home";
import ProjectsSection from "./routes/ProjectsSection";
import ContactMeSection from "./routes/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contactme" element={<ContactMeSection />} />
          </Routes>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
