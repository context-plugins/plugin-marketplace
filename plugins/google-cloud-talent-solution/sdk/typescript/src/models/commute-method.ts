import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The method of transportation to calculate the commute time for. */
export const CommuteMethod = {
  CommuteMethodUnspecified: "COMMUTE_METHOD_UNSPECIFIED",
  Driving: "DRIVING",
  Transit: "TRANSIT",
  Walking: "WALKING",
  Cycling: "CYCLING",
  TransitAccessible: "TRANSIT_ACCESSIBLE",
} as const;
export type CommuteMethod = (typeof CommuteMethod)[keyof typeof CommuteMethod] | (string & {});

export const commuteMethodSchema: EnumSchema<CommuteMethod> = s.enumOf<CommuteMethod>(CommuteMethod);
