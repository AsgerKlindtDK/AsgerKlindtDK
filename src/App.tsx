import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
