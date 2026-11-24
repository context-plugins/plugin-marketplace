import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyItemSchema, type HistoryItem } from "./history-item.js";

export type IncomeStatementEntry = {
  /** Type of income statement entry: Revenue, Operating profit, or Net profit */
  category?: string;
  /** Historical values for this income statement type */
  history?: HistoryItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeStatementEntrySchema: Schema<IncomeStatementEntry> = s.object<IncomeStatementEntry>(
  {
    category: s.optional(s.string()),
    history: s.optional(s.array(s.lazy(() => historyItemSchema))),
  },
  { additionalProperties: s.json() },
);
