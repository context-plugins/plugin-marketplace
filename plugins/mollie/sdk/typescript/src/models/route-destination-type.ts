import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of destination. Currently only the destination type `organization` is supported. */
export const RouteDestinationType = {
  Organization: "organization",
} as const;
export type RouteDestinationType =
  | (typeof RouteDestinationType)[keyof typeof RouteDestinationType]
  | (string & {});

export const routeDestinationTypeSchema: EnumSchema<RouteDestinationType> =
  s.enumOf<RouteDestinationType>(RouteDestinationType);
