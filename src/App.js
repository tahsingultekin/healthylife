import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import { CustomRouter } from "./router/CustomRouter";
import { ScheduleRouter } from "./router/CustomRouter";
import { GalleryRouter } from "./router/CustomRouter";
import { AuthContextProvider } from "./context/AuthContext";
import Schedule from "./Pages/Schedule/Schedule";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          {CustomRouter.map((item, index) => {
            return <Route key={index} {...item} />;
          })}

          <Route path="schedule" element={<Schedule />}>
            {ScheduleRouter.map((item, index) => {
              return <Route key={index} {...item} />;
            })}
          </Route>

          <Route path="gallery" element={<Gallery />}>
            {GalleryRouter.map((item, index) => {
              return <Route key={index} {...item} />;
            })}
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
