import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the route. The valid values are accepted (received from the customer network)
 * and advertised (advertised to the customer network).
 */
export const RouteDirection1 = {
  Accepted: "accepted",
  Advertised: "advertised",
} as const;
export type RouteDirection1 = (typeof RouteDirection1)[keyof typeof RouteDirection1] | (string & {});

export const routeDirection1Schema: EnumSchema<RouteDirection1> = s.enumOf<RouteDirection1>(RouteDirection1);
