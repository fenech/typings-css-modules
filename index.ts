import * as working from "./index.css";

console.log((working as any).foo);

import broken from "./index.css";

console.log(broken.foo);
