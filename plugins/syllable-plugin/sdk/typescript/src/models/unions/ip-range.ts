import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The SIP IP range in CIDR notation */
export type IpRange = string;

export const ipRangeSchema: Schema<IpRange> = s.of<IpRange>(s.union([s.string()]));
