import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyItemSchema, type HistoryItem } from "./history-item.js";

export type FinancialStatementEntry = {
  /** Type of financial statement line item */
  particular?: string;
  /** Historical values for this statement line item */
  history?: HistoryItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const financialStatementEntrySchema: Schema<FinancialStatementEntry> =
  s.object<FinancialStatementEntry>(
    {
      particular: s.optional(s.string()),
      history: s.optional(s.array(s.lazy(() => historyItemSchema))),
    },
    { additionalProperties: s.json() },
  );
