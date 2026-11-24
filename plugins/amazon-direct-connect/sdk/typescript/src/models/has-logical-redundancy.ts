import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the connection supports a secondary BGP peer in the same address family
 * (IPv4/IPv6).
 */
export const HasLogicalRedundancy = {
  Unknown: "unknown",
  Yes: "yes",
  No: "no",
} as const;
export type HasLogicalRedundancy =
  | (typeof HasLogicalRedundancy)[keyof typeof HasLogicalRedundancy]
  | (string & {});

export const hasLogicalRedundancySchema: EnumSchema<HasLogicalRedundancy> =
  s.enumOf<HasLogicalRedundancy>(HasLogicalRedundancy);
