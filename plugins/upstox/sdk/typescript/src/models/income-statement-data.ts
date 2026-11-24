import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { financialStatementEntrySchema, type FinancialStatementEntry } from "./financial-statement-entry.js";
import { incomeStatementEntrySchema, type IncomeStatementEntry } from "./income-statement-entry.js";

export type IncomeStatementData = {
  /** Report type: consolidated or standalone */
  type?: string;
  /** Time period: yearly or quarterly */
  timePeriod?: string;
  /** Unit of monetary values */
  unitsIn?: string;
  /** Income statement entries grouped by type (Revenue, Operating profit, Net profit) */
  incomeStatement?: IncomeStatementEntry[];
  /** List of financial statement income statement items with historical values */
  fullStatement?: FinancialStatementEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeStatementDataSchema: Schema<IncomeStatementData> = s.object<IncomeStatementData>(
  {
    type: s.optional(s.string()),
    timePeriod: s.optional(s.string()),
    unitsIn: s.optional(s.string()),
    incomeStatement: s.optional(s.array(s.lazy(() => incomeStatementEntrySchema))),
    fullStatement: s.optional(s.array(s.lazy(() => financialStatementEntrySchema))),
    _keysMap: {
      timePeriod: "time_period",
      unitsIn: "units_in",
      incomeStatement: "income_statement",
      fullStatement: "full_statement",
    },
  },
  { additionalProperties: s.json() },
);
