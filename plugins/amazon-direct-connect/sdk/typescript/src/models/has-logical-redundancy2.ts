import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
 */
export const HasLogicalRedundancy2 = {
  Unknown: "unknown",
  Yes: "yes",
  No: "no",
} as const;
export type HasLogicalRedundancy2 =
  | (typeof HasLogicalRedundancy2)[keyof typeof HasLogicalRedundancy2]
  | (string & {});

export const hasLogicalRedundancy2Schema: EnumSchema<HasLogicalRedundancy2> =
  s.enumOf<HasLogicalRedundancy2>(HasLogicalRedundancy2);
