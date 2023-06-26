import { useEffect , useRef} from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

function App() {
  var token='';
  const messageRef = useRef();
  const ref = collection(firestore, "tokens");

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      token = await getToken(messaging, {
        vapidKey:
          "BManIMJQ0fG7_mCmYgv_qZqMbn9VDhtr0pRLNooTPuI8f64qX6myWWfVF146PdGbJRzzBjunjwG4CbXW7XhhXWE",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
      let data = {
        client_1:token,
      }
      addDoc(ref,data);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
    // subscribe(token);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>fcm-react-client-app</p>
      </header>
    </div>
  );
}

export default App;