import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";
import Notification from "./components/Notification.jsx";

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>

                <Hero />
                <Notification message={`Please, do not send multiple requests for this free API content app, let other Recruiters, HR's, and Team Leads try before it will expire, thank you. (insert a link into the input field below)`}/>
                <Demo />
            </div>
        </main>
    );
};

export default App;
