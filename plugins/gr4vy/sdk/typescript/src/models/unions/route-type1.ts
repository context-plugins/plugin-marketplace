import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { routeTypeSchema, type RouteType } from "../route-type.js";

/** The route type of the flight. */
export type RouteType1 = RouteType;

export const routeType1Schema: Schema<RouteType1> = s.of<RouteType1>(
  s.union([s.lazy(() => routeTypeSchema)]),
);
