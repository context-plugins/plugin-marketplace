import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model1, model1Schema } from "./model1.js";

export type AccountsReceivablesReportSpec = {
  /** The report model type. @default Model1.AccountsReceivables */
  model?: Model1;
  /** The parameters for the accounts receivables report model. */
  params: Record<string, unknown>;
};

export const accountsReceivablesReportSpecSchema: Schema<AccountsReceivablesReportSpec> =
  s.object<AccountsReceivablesReportSpec>({
    model: s.defaulted(model1Schema, Model1.AccountsReceivables),
    params: s.record(s.string(), s.unknown()),
  });
