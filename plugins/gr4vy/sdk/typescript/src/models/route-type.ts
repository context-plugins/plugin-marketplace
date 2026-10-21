import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RouteType = {
  RoundTrip: "round_trip",
  OneWay: "one_way",
} as const;
export type RouteType = (typeof RouteType)[keyof typeof RouteType] | (string & {});

export const routeTypeSchema: EnumSchema<RouteType> = s.enumOf<RouteType>(RouteType);
