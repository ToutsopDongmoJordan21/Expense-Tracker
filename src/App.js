import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensives } from './components/IncomeExpensives';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensives />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
