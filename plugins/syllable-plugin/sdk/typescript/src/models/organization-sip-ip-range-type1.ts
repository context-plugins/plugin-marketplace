import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The SIP IP range type */
export const OrganizationSipIpRangeType1 = {
  Signaling: "signaling",
  Media: "media",
} as const;
export type OrganizationSipIpRangeType1 =
  | (typeof OrganizationSipIpRangeType1)[keyof typeof OrganizationSipIpRangeType1]
  | (string & {});

export const organizationSipIpRangeType1Schema: EnumSchema<OrganizationSipIpRangeType1> =
  s.enumOf<OrganizationSipIpRangeType1>(OrganizationSipIpRangeType1);
