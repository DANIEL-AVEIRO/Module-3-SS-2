import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";
import PostUpdate from "./pages/PostUpdate";
import PostDelete from "./pages/PostDelete";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-6xl mx-auto py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/post-create" element={<PostCreate />} />
          <Route path="/post-update" element={<PostUpdate />} />
          <Route path="/post-delete" element={<PostDelete />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
