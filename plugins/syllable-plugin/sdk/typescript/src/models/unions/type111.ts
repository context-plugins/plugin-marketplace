import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  organizationSipIpRangeTypeSchema,
  type OrganizationSipIpRangeType,
} from "../organization-sip-ip-range-type.js";

/** The SIP IP range type */
export type Type111 = OrganizationSipIpRangeType;

export const type111Schema: Schema<Type111> = s.of<Type111>(
  s.union([s.lazy(() => organizationSipIpRangeTypeSchema)]),
);
