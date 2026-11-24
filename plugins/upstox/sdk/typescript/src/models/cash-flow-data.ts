import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cashFlowEntrySchema, type CashFlowEntry } from "./cash-flow-entry.js";
import { financialStatementEntrySchema, type FinancialStatementEntry } from "./financial-statement-entry.js";

export type CashFlowData = {
  /** Report type: consolidated or standalone */
  type?: string;
  /** Time period: yearly or quarterly */
  timePeriod?: string;
  /** Unit of monetary values */
  unitsIn?: string;
  /** Cash flow entries grouped by type (Operating, Investing, Financing) */
  cashFlow?: CashFlowEntry[];
  /** List of financial statement cash flow items with historical values */
  fullStatement?: FinancialStatementEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashFlowDataSchema: Schema<CashFlowData> = s.object<CashFlowData>(
  {
    type: s.optional(s.string()),
    timePeriod: s.optional(s.string()),
    unitsIn: s.optional(s.string()),
    cashFlow: s.optional(s.array(s.lazy(() => cashFlowEntrySchema))),
    fullStatement: s.optional(s.array(s.lazy(() => financialStatementEntrySchema))),
    _keysMap: {
      timePeriod: "time_period",
      unitsIn: "units_in",
      cashFlow: "cash_flow",
      fullStatement: "full_statement",
    },
  },
  { additionalProperties: s.json() },
);
