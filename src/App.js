import "./App.css";
import ProfilePhoto from "./profile/ProfilePhoto.js";
import FullName from "./profile/FullName.js";
import Address from "./profile/Address.js";
function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
