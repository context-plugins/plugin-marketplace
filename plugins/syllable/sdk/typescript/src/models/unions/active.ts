import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether the campaign does outreach on this day. Omitted inherits: a weekday rule inherits from
 * active_days, a date rule inherits from the weekday rule. Set it to false to close one date, for
 * example a holiday, without a change to active_days.
 */
export type Active = boolean;

export const activeSchema: Schema<Active> = s.of<Active>(s.union([s.boolean()]));
