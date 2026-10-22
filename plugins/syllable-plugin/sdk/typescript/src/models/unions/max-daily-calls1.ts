import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Maximum number of unique reference IDs that get outreach on this day. Omitted keeps the campaign
 * maximum. Retries do not count towards it and keep dialing once it is reached. 0 is different: it
 * closes the day for all outreach, retries included.
 */
export type MaxDailyCalls1 = number;

export const maxDailyCalls1Schema: Schema<MaxDailyCalls1> = s.of<MaxDailyCalls1>(s.union([s.int()]));
