import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of destination. Currently only the destination type `organization` is supported. */
export const RouteDestinationTypeResponse = {
  Organization: "organization",
} as const;
export type RouteDestinationTypeResponse =
  | (typeof RouteDestinationTypeResponse)[keyof typeof RouteDestinationTypeResponse]
  | (string & {});

export const routeDestinationTypeResponseSchema: EnumSchema<RouteDestinationTypeResponse> =
  s.enumOf<RouteDestinationTypeResponse>(RouteDestinationTypeResponse);
