import "./App.css";
import { useContext } from "react";
import { Offline, Online } from "react-detect-offline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "../MasterLayout/MasterLayout";
import Home from "../Home/Home";
import About from "../About/About";
import Movies from "../Movies/Movies";
import Tvshows from "../Tvshows/Tvshows";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Pepole from "../Pepole/Pepole";
import Notfound from "../Notfound/Notfound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Details from "../Details/Details";
import { AuthContext } from "../../Context/AuthStore";

function App() {
  let { userData, saveUserData, logOut } = useContext(AuthContext);

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout userData={userData} logOut={logOut} />,
      errorElement: <Notfound />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
          index: true,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "tvshows",
          element: (
            <ProtectedRoute userData={userData}>
              <Tvshows />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        {
          path: "pepole",
          element: (
            <ProtectedRoute userData={userData}>
              <Pepole />
            </ProtectedRoute>
          ),
        },
        {
          path: "details/:id/:media",
          element: (
            <ProtectedRoute userData={userData}>
              <Details />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <Online>
        {" "}
        <RouterProvider router={routes} />
      </Online>
      <Offline>
        <h1 className='text-center mx-5 my-5'>
          YOUR ARE OFFLINE CHECK YOUR CONNECTION
        </h1>
      </Offline>
    </div>
  );
}

export default App;
