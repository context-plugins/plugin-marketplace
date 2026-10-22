import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Health status of the persistent queue. */
export const Health = {
  Green: "Green",
  Red: "Red",
  Unknown: "Unknown",
  Yellow: "Yellow",
} as const;
export type Health = (typeof Health)[keyof typeof Health] | (string & {});

export const healthSchema: EnumSchema<Health> = s.enumOf<Health>(Health);
