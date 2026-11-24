import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balanceSheetHistoryItemSchema, type BalanceSheetHistoryItem } from "./balance-sheet-history-item.js";
import { financialStatementEntrySchema, type FinancialStatementEntry } from "./financial-statement-entry.js";

export type BalanceSheetData = {
  /** Report type: consolidated or standalone */
  type?: string;
  /** Time period: yearly or quarterly */
  timePeriod?: string;
  /** Unit of monetary values */
  unitsIn?: string;
  /** Historical balance sheet entries */
  history?: BalanceSheetHistoryItem[];
  /** List of financial statement balance sheet items with historical values */
  fullStatement?: FinancialStatementEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceSheetDataSchema: Schema<BalanceSheetData> = s.object<BalanceSheetData>(
  {
    type: s.optional(s.string()),
    timePeriod: s.optional(s.string()),
    unitsIn: s.optional(s.string()),
    history: s.optional(s.array(s.lazy(() => balanceSheetHistoryItemSchema))),
    fullStatement: s.optional(s.array(s.lazy(() => financialStatementEntrySchema))),
    _keysMap: {
      timePeriod: "time_period",
      unitsIn: "units_in",
      fullStatement: "full_statement",
    },
  },
  { additionalProperties: s.json() },
);
