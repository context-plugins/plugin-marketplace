import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  organizationSipIpRangeType1Schema,
  type OrganizationSipIpRangeType1,
} from "./organization-sip-ip-range-type1.js";
import { ipRangeSchema, type IpRange } from "./unions/ip-range.js";

/** The request body for creating a new SIP IP range. */
export type OrganizationSipIpRangeCreate = {
  /** The SIP IP range type */
  type: OrganizationSipIpRangeType1;
  /** The SIP IP range in CIDR notation */
  ipRange: IpRange;
};

export const organizationSipIpRangeCreateSchema: Schema<OrganizationSipIpRangeCreate> =
  s.object<OrganizationSipIpRangeCreate>({
    type: organizationSipIpRangeType1Schema,
    ipRange: ipRangeSchema,
    _keysMap: {
      ipRange: "ip_range",
    },
  });
