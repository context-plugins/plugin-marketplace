import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AnalysisTraceId = string;

export const analysisTraceIdSchema: Schema<AnalysisTraceId> = s.of<AnalysisTraceId>(s.union([s.string()]));
