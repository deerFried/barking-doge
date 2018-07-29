import { Router } from "vingle-corgi";

import { routes } from "../routes";

const router = new Router([ routes ]);
export const handler = router.handler();
