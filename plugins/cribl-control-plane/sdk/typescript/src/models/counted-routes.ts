import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { routesSchema, type Routes } from "./routes.js";

export type CountedRoutes = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: Routes[];
};

export const countedRoutesSchema: Schema<CountedRoutes> = s.object<CountedRoutes>({
  count: s.int(),
  items: s.array(s.lazy(() => routesSchema)),
});
