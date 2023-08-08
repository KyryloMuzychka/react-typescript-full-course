import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/example">Example</NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UserPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/example"} element={<EventsExample />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
        <Route path={"/todos/:id"} element={<TodosItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
