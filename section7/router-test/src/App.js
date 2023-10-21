import Home from "./pages/Home";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import BookList from "./pages/BookList";
import BookIndex from "./pages/BookIndex";
import BookDetail from "./pages/BookDetail";

//pathは="/"はindexでも可能
function App() {
  const isAuthenticated = true;

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/contact" /> : <Home />}
          />
          <Route path="/book-list" element={<BookList />}>
            <Route index element={<BookIndex />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
