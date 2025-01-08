```javascript
//Component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Incorrect Logic for setting the count
    if (count > 10) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```