import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    // Auth page if not authenticated
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // Chats Page if authenticated
    return <ChatsPage user={user} />;
  }
}

export default App;