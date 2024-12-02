import App from "next/app"
import GlobalStyles from "../src/theme/GlobalStyle"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp