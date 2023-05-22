import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
//import này đã được rút gọn
import { DefaultLayout } from "./components/Layout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Dùng map xử lí route */}
                    {
                        publicRoutes.map((route, index) => {
                            // //Nếu layout === null thì không render, ngc lại thì render Defaultlayout
                            // const Layout = route.layout === null ? Fragment : DefaultLayout;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            const Page = route.component
                            return <Route
                                key={index}
                                path={route.path}
                                element={<Layout><Page /></Layout>}
                            />
                        })
                    }
                </Routes>
            </div>
        </Router>

    );
}

export default App;
