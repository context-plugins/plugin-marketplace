import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipRangeSchema, type IpRange } from "./unions/ip-range.js";
import { type111Schema, type Type111 } from "./unions/type111.js";

/** The request body for updating a SIP IP range. */
export type OrganizationSipIpRangeUpdate = {
  /** The SIP IP range type */
  type?: Type111;
  /** The SIP IP range in CIDR notation */
  ipRange?: IpRange;
};

export const organizationSipIpRangeUpdateSchema: Schema<OrganizationSipIpRangeUpdate> =
  s.object<OrganizationSipIpRangeUpdate>({
    type: s.optional(s.lazy(() => type111Schema)),
    ipRange: s.optional(s.lazy(() => ipRangeSchema)),
    _keysMap: {
      ipRange: "ip_range",
    },
  });
