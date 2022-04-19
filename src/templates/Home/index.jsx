import { useCounterContext } from "../../contexts/CounterContext"

export const Home = () => {

  const [state, actions] = useCounterContext();

  console.log(state); 

  return (
    <div>
      <h1 onClick={()=> actions.increase()}>oi</h1>
    </div>
  )
}


