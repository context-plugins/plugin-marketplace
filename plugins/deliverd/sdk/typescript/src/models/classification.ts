import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How sensitive the data is. Can raise, never lower, what Deliverd already knows about a report it
 * holds
 */
export const Classification = {
  Public: "public",
  Internal: "internal",
  Confidential: "confidential",
  Restricted: "restricted",
} as const;
export type Classification = (typeof Classification)[keyof typeof Classification] | (string & {});

export const classificationSchema: EnumSchema<Classification> = s.enumOf<Classification>(Classification);
