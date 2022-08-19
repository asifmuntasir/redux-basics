import CounterPage from "./component/CounterPage";
import User from "./component/User";

function App() {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <CounterPage />
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
