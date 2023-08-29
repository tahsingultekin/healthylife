import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

import Classes from "../Pages/Classes";
import Price from "../Pages/Price";
import Blog from "../Pages/Blog";

import Monday from "../Pages/Schedule/Monday";
import Tuesday from "../Pages/Schedule/Tuesday";
import Wednesday from "../Pages/Schedule/Wednesday";
import Thursday from "../Pages/Schedule/Thursday";
import Friday from "../Pages/Schedule/Friday";
import Saturday from "../Pages/Schedule/Saturday";
import Sunday from "../Pages/Schedule/Sunday";

import GalleryPage1 from "../Pages/Gallery/GalleryPage1";
import GalleryPage2 from "../Pages/Gallery/GalleryPage2";
import About from "../Pages/About";

export const CustomRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/pricing",
    element: <Price />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const ScheduleRouter = [
  {
    path: "monday",
    element: <Monday />,
  },
  {
    path: "tuesday",
    element: <Tuesday />,
  },
  {
    path: "wednesday",
    element: <Wednesday />,
  },
  {
    path: "thursday",
    element: <Thursday />,
  },
  {
    path: "friday",
    element: <Friday />,
  },
  {
    path: "saturday",
    element: <Saturday />,
  },
  {
    path: "sunday",
    element: <Sunday />,
  },
];

export const GalleryRouter = [
  {
    path: "page-1",
    element: <GalleryPage1 />,
  },
  {
    path: "page-2",
    element: <GalleryPage2 />,
  },
];
