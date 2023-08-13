//Layouts
import { HeaderOnly } from '~/components/Layout'

// Cấu hình routes
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes đưa cấu hình ra ngoài
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }, //thêm layout vô giá trị
    { path: 'search', component: Search, layout: null },
]

const privateRoutes = [];

export { publicRoutes, privateRoutes };