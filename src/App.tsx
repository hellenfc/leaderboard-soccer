import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Leaderboard />
    </QueryClientProvider>
  );
}

export default App;
