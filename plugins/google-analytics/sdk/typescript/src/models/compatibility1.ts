import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be
 * successfully added to the report.
 */
export const Compatibility1 = {
  CompatibilityUnspecified: "COMPATIBILITY_UNSPECIFIED",
  Compatible: "COMPATIBLE",
  Incompatible: "INCOMPATIBLE",
} as const;
export type Compatibility1 = (typeof Compatibility1)[keyof typeof Compatibility1] | (string & {});

export const compatibility1Schema: EnumSchema<Compatibility1> = s.enumOf<Compatibility1>(Compatibility1);
