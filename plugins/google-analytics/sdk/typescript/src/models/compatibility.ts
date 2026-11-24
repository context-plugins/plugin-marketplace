import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be
 * successfully added to the report.
 */
export const Compatibility = {
  CompatibilityUnspecified: "COMPATIBILITY_UNSPECIFIED",
  Compatible: "COMPATIBLE",
  Incompatible: "INCOMPATIBLE",
} as const;
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility] | (string & {});

export const compatibilitySchema: EnumSchema<Compatibility> = s.enumOf<Compatibility>(Compatibility);
