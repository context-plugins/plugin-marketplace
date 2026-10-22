import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the transactions that were originated from the given `ip_address`.
 */
export type IpAddress = string;

export const ipAddressSchema: Schema<IpAddress> = s.of<IpAddress>(s.union([s.string()]));
