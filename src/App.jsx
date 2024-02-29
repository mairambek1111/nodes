import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./Context";
import { useState } from "react";
import NoteList from "./pages/note/NoteList";
import AddNotePage from "./pages/AddNotePage/AddNotePage";
import NotePage from "./pages/notePage/notePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NoteList />,
  },
  {
    path: "/addNotepage",
    element: <AddNotePage />,
  },
  {
    path: "/notepage/:id",
    element: <NotePage />,
  },
]);
function App() {
  const [data, setdata] = useState([]);
  return (
    <>
      <Context.Provider value={{ data, setdata }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>
  );
}

export default App;
