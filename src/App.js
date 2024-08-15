import './App.scss';
import Dashboard from './components/dashboard/dashboard';
import PostList from './features/PostList';
import SubmitPosts from './features/SubmitPosts';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-2xl text-black">Reudx Blog</h1>
      {/* <Dashboard /> */}
      <PostList />
      <SubmitPosts />
      </div>

    </div>
  );
}

export default App;
