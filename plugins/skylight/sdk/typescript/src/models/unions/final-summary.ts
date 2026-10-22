import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Final summary of agent execution */
export type FinalSummary = string;

export const finalSummarySchema: Schema<FinalSummary> = s.of<FinalSummary>(s.union([s.string()]));
