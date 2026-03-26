import { useRoutes } from "react-router-dom";
import router from "./routes";

function App() {
  const routes = useRoutes(router);

  return routes;
}

export default App;