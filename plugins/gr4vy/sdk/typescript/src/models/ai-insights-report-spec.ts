import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model, modelSchema } from "./model.js";

export type AiInsightsReportSpec = {
  /** The report model type. @default Model.AiInsights */
  model?: Model;
  /** The parameters for the AI insights report model. */
  params: Record<string, unknown>;
};

export const aiInsightsReportSpecSchema: Schema<AiInsightsReportSpec> = s.object<AiInsightsReportSpec>({
  model: s.defaulted(modelSchema, Model.AiInsights),
  params: s.record(s.string(), s.unknown()),
});
