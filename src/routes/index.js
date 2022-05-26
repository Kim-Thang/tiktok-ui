import { HeaderOnly } from '../components/Layout';

import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';
import Profile from '../pages/Profile';

import routesConfig from '../config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly },
    { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
    { path: routesConfig.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
