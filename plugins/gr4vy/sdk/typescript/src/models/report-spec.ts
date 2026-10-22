import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSpecModel2Schema, type ReportSpecModel2 } from "./report-spec-model2.js";

export type ReportSpec = {
  /** The report model type. */
  model: ReportSpecModel2;
  /** The parameters for the report model. */
  params: Record<string, unknown>;
};

export const reportSpecSchema: Schema<ReportSpec> = s.object<ReportSpec>({
  model: reportSpecModel2Schema,
  params: s.record(s.string(), s.unknown()),
});
