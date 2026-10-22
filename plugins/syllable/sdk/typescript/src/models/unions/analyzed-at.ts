import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the workflow execution started processing this file; null while the row is still PENDING */
export type AnalyzedAt = Date;

export const analyzedAtSchema: Schema<AnalyzedAt> = s.of<AnalyzedAt>(s.union([s.dateTime()]));
