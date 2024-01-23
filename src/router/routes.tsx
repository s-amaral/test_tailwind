import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// COMPONENTS
import "react-toastify/dist/ReactToastify.css";

// PAGES
const ProductPage = React.lazy(() => import("../pages/Product"));
const FrontPage = React.lazy(() => import("../pages/Front"));
const FormPage = React.lazy(() => import("../pages/Form"));
const Navbar = React.lazy(() => import("../pages/Navbar"));

export default function MainRoutes() {
  const { isLoading, error } = useAuth0();

  const location = useLocation();

  React.useEffect(() => {
    // Kinda brute-forcing because otherwise it would go by the page's title, which is always "Parcision"
    window.gtag("event", "page_view", {
      page_title: location.pathname,
      page_location: location.pathname,
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <FrontPage />
            </React.Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="/form"
          element={
            <React.Suspense fallback={<>...</>}>
              <FormPage />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}
