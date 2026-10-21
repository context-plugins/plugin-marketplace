import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model5, model5Schema } from "./model5.js";

export type TransactionRetriesReportSpec = {
  /** The report model type. @default Model5.TransactionRetries */
  model?: Model5;
  /** The parameters for the transaction retries report model. */
  params: Record<string, unknown>;
};

export const transactionRetriesReportSpecSchema: Schema<TransactionRetriesReportSpec> =
  s.object<TransactionRetriesReportSpec>({
    model: s.defaulted(model5Schema, Model5.TransactionRetries),
    params: s.record(s.string(), s.unknown()),
  });
