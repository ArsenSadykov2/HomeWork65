import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditContent from "./components/EditContent.tsx";
import ShowContent from "./components/ShowContent.tsx";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/pages/:pageName" element={<ShowContent />} />
                <Route path="/pages/admin" element={<EditContent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
