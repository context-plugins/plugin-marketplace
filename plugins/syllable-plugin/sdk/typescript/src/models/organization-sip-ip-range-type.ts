import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of SIP IP range. Signaling IP ranges are used for SIP signaling traffic (e.g. SIP
 * INVITE, SIP REFER, SIP OPTIONS, etc.), while media IP ranges are used for SIP media traffic
 * (audio and video).
 */
export const OrganizationSipIpRangeType = {
  Signaling: "signaling",
  Media: "media",
} as const;
export type OrganizationSipIpRangeType =
  | (typeof OrganizationSipIpRangeType)[keyof typeof OrganizationSipIpRangeType]
  | (string & {});

export const organizationSipIpRangeTypeSchema: EnumSchema<OrganizationSipIpRangeType> =
  s.enumOf<OrganizationSipIpRangeType>(OrganizationSipIpRangeType);
