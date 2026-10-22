import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listRouteGetResponseSchema, type ListRouteGetResponse } from "./list-route-get-response.js";

export type Embedded30 = {
  /** An array of route objects. */
  routes: ListRouteGetResponse[];
};

export const embedded30Schema: Schema<Embedded30> = s.object<Embedded30>({
  routes: s.array(s.lazy(() => listRouteGetResponseSchema)),
});
