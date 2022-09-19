import { HeaderOnly } from '../layout';

import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';
import Profile from '../pages/Profile';

import config from '../config';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
