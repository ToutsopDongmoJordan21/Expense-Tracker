import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensives } from './components/IncomeExpensives';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <Balance />
        <IncomeExpensives />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
