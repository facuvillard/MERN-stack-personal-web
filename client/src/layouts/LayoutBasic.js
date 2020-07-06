import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import './LayoutBasic.scss'

export default function LayaoutBasic(props) {
    const { routes } = props;
    const { Content, Footer } = Layout;
    return (
        <Layout>
            <h2>Menu Sider Basic User</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    Facundo Villard
                </Footer>
            </Layout>
        </Layout>
    )
}
function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}