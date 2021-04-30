function App({ Component, pageProps }) {
  const layout = Component.layout || (page => page);

  return (
    <>{layout(<Component {...pageProps} />)}</>
  );
}

export default App;