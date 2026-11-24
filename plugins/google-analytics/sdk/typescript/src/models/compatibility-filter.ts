import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Filters the dimensions and metrics in the response to just this compatibility. Commonly used as
 * `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.
 */
export const CompatibilityFilter = {
  CompatibilityUnspecified: "COMPATIBILITY_UNSPECIFIED",
  Compatible: "COMPATIBLE",
  Incompatible: "INCOMPATIBLE",
} as const;
export type CompatibilityFilter =
  | (typeof CompatibilityFilter)[keyof typeof CompatibilityFilter]
  | (string & {});

export const compatibilityFilterSchema: EnumSchema<CompatibilityFilter> =
  s.enumOf<CompatibilityFilter>(CompatibilityFilter);
