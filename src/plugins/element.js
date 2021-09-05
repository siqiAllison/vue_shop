import Vue from 'vue'
import { Button, Form, MessageBox, FormItem, Pagination, Dialog, Input, Tooltip, Switch, Table, TableColumn, Row, Col, Message, Container, Main, Header, Menu, MenuItem, Submenu, Aside, Breadcrumb, BreadcrumbItem, Card } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Header)
Vue.use(Submenu)
Vue.use(Aside)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
