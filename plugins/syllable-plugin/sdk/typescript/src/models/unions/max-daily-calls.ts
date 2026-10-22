import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Maximum number of outreach calls per day */
export type MaxDailyCalls = number;

export const maxDailyCallsSchema: Schema<MaxDailyCalls> = s.of<MaxDailyCalls>(s.union([s.int()]));
