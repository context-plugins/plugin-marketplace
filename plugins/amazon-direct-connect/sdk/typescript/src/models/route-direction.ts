import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the routes to return. The valid values are accepted (routes received from the
 * customer network) and advertised (routes advertised to the customer network).
 */
export const RouteDirection = {
  Accepted: "accepted",
  Advertised: "advertised",
} as const;
export type RouteDirection = (typeof RouteDirection)[keyof typeof RouteDirection] | (string & {});

export const routeDirectionSchema: EnumSchema<RouteDirection> = s.enumOf<RouteDirection>(RouteDirection);
