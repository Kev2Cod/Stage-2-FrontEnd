import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/static/css/style.css";
import { Route, Routes } from "react-router-dom";
//Component

// Component Pages
import Navbar from "./components/Navbar";
import { Login, Register, Home, ProfilePage, DetailProduct, ListCategory, ListProduct, Complain, EditCategory, EditProduct } from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import { Error } from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route path="*" element={<Error />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/list-category" element={<ListCategory />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path="/complain" element={<Complain />} />

          <Route path="/detail-product/:id" element={<DetailProduct />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
