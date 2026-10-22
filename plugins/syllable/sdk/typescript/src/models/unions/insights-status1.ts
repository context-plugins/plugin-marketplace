import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InsightsStatus1 = string;

export const insightsStatus1Schema: Schema<InsightsStatus1> = s.of<InsightsStatus1>(s.union([s.string()]));
