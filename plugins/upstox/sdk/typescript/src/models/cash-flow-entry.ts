import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyItemSchema, type HistoryItem } from "./history-item.js";

export type CashFlowEntry = {
  /** Type of cash flow: Operating, Investing, or Financing */
  category?: string;
  /** Historical cash flow values for this type */
  history?: HistoryItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashFlowEntrySchema: Schema<CashFlowEntry> = s.object<CashFlowEntry>(
  {
    category: s.optional(s.string()),
    history: s.optional(s.array(s.lazy(() => historyItemSchema))),
  },
  { additionalProperties: s.json() },
);
