import { HeaderOnly } from '../components/Layout';

import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';
import Profile from '../pages/Profile';


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile, layout: HeaderOnly },
    { path: '/search', component: SearchPage, layout: null },


];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
