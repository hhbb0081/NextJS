// 가장 먼저 렌더링되는 페이지
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}