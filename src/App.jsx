import Cards from "./componenets/Cards";
import About from "./componenets/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Cards />,
    },
    {
      path: "/details/:id",
      element: <About />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Cards} />
    //       <Route path="/details" component={About} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}
export default App;
