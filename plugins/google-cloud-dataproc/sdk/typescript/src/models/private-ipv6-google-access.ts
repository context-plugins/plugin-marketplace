import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of IPv6 access for a cluster. */
export const PrivateIpv6GoogleAccess = {
  PrivateIpv6GoogleAccessUnspecified: "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
  InheritFromSubnetwork: "INHERIT_FROM_SUBNETWORK",
  Outbound: "OUTBOUND",
  Bidirectional: "BIDIRECTIONAL",
} as const;
export type PrivateIpv6GoogleAccess =
  | (typeof PrivateIpv6GoogleAccess)[keyof typeof PrivateIpv6GoogleAccess]
  | (string & {});

export const privateIpv6GoogleAccessSchema: EnumSchema<PrivateIpv6GoogleAccess> =
  s.enumOf<PrivateIpv6GoogleAccess>(PrivateIpv6GoogleAccess);
