import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the interconnect supports a secondary BGP in the same address family
 * (IPv4/IPv6).
 */
export const HasLogicalRedundancy1 = {
  Unknown: "unknown",
  Yes: "yes",
  No: "no",
} as const;
export type HasLogicalRedundancy1 =
  | (typeof HasLogicalRedundancy1)[keyof typeof HasLogicalRedundancy1]
  | (string & {});

export const hasLogicalRedundancy1Schema: EnumSchema<HasLogicalRedundancy1> =
  s.enumOf<HasLogicalRedundancy1>(HasLogicalRedundancy1);
