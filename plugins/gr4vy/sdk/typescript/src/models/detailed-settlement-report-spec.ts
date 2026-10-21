import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model2, model2Schema } from "./model2.js";

export type DetailedSettlementReportSpec = {
  /** The report model type. @default Model2.DetailedSettlement */
  model?: Model2;
  /** The parameters for the detailed settlement report model. */
  params: Record<string, unknown>;
};

export const detailedSettlementReportSpecSchema: Schema<DetailedSettlementReportSpec> =
  s.object<DetailedSettlementReportSpec>({
    model: s.defaulted(model2Schema, Model2.DetailedSettlement),
    params: s.record(s.string(), s.unknown()),
  });
