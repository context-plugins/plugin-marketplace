import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSpecModel2Schema, type ReportSpecModel2 } from "./report-spec-model2.js";

/** The report specification. */
export type ReportSpec2 = {
  /** The report model type. */
  model: ReportSpecModel2;
  /** The parameters for the report model. */
  params: Record<string, unknown>;
};

export const reportSpec2Schema: Schema<ReportSpec2> = s.object<ReportSpec2>({
  model: reportSpecModel2Schema,
  params: s.record(s.string(), s.unknown()),
});
