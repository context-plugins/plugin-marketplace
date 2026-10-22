import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the results asked with respect to the reference timestamp. Missing field
 * defaults to OLDER. Only applicable when using a message_id.
 */
export const Direction = {
  Older: "OLDER",
  Newer: "NEWER",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
