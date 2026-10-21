import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When the workflow execution started processing this session; null while the row is still PENDING
 */
export type AnalyzedAt1 = Date;

export const analyzedAt1Schema: Schema<AnalyzedAt1> = s.of<AnalyzedAt1>(s.union([s.dateTime()]));
