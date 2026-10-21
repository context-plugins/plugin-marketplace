import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model4, model4Schema } from "./model4.js";

export type TransactionsReportSpec = {
  /** The report model type. @default Model4.Transactions */
  model?: Model4;
  /** The parameters for the transactions report model. */
  params: Record<string, unknown>;
};

export const transactionsReportSpecSchema: Schema<TransactionsReportSpec> = s.object<TransactionsReportSpec>({
  model: s.defaulted(model4Schema, Model4.Transactions),
  params: s.record(s.string(), s.unknown()),
});
