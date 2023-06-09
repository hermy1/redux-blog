import './App.scss';
import Dashboard from './components/dashboard/dashboard';
import PostList from './features/PostList';
import SubmitPosts from './features/SubmitPosts';

function App() {
  return (
    <div className="">
      <h1 className="text-2xl text-black">Reudx Blog</h1>
      <Dashboard />
      <PostList />
      <SubmitPosts />

    </div>
  );
}

export default App;
