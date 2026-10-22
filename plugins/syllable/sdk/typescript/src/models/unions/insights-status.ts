import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Status of session in insight workflow */
export type InsightsStatus = string;

export const insightsStatusSchema: Schema<InsightsStatus> = s.of<InsightsStatus>(s.union([s.string()]));
