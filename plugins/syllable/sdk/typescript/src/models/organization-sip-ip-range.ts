import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  organizationSipIpRangeType1Schema,
  type OrganizationSipIpRangeType1,
} from "./organization-sip-ip-range-type1.js";
import { createdAt1Schema, type CreatedAt1 } from "./unions/created-at1.js";
import { deletedAt3Schema, type DeletedAt3 } from "./unions/deleted-at3.js";
import { ipRangeSchema, type IpRange } from "./unions/ip-range.js";
import { updatedAt1Schema, type UpdatedAt1 } from "./unions/updated-at1.js";

/** SIP IP range object. */
export type OrganizationSipIpRange = {
  /** The SIP IP range type */
  type: OrganizationSipIpRangeType1;
  /** The SIP IP range in CIDR notation */
  ipRange: IpRange;
  /** The organization SIP IP range ID */
  id: number;
  /** The Organization ID */
  organizationId: number;
  /**
   * Whether Syllable has verified this SIP IP range.Verification implies that the Syllable team has
   * updated the firewall rules on the SBCs, confirmed traffic is correctly established from/to the
   * customer network and calls to Syllable agents are working.
   */
  verified: boolean;
  /** The timestamp when the range was created */
  createdAt?: CreatedAt1;
  /** The timestamp when the range was last updated */
  updatedAt?: UpdatedAt1;
  /** The timestamp when the IP was deleted */
  deletedAt?: DeletedAt3;
};

export const organizationSipIpRangeSchema: Schema<OrganizationSipIpRange> = s.object<OrganizationSipIpRange>({
  type: organizationSipIpRangeType1Schema,
  ipRange: ipRangeSchema,
  id: s.int(),
  organizationId: s.int(),
  verified: s.boolean(),
  createdAt: s.optional(s.lazy(() => createdAt1Schema)),
  updatedAt: s.optional(s.lazy(() => updatedAt1Schema)),
  deletedAt: s.optional(s.lazy(() => deletedAt3Schema)),
  _keysMap: {
    ipRange: "ip_range",
    organizationId: "organization_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
});
