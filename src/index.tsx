import * as React from "react"
import { render } from "react-dom"

const App: React.FC<{}> = (): JSX.Element => <div>Hello Word</div>

render(<App />, document.getElementById("app"))
