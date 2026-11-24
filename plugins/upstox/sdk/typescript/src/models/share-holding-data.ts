import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyItemSchema, type HistoryItem } from "./history-item.js";

export type ShareHoldingData = {
  /** Category of shareholder */
  category?: string;
  /** Quarterly shareholding history */
  history?: HistoryItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shareHoldingDataSchema: Schema<ShareHoldingData> = s.object<ShareHoldingData>(
  {
    category: s.optional(s.string()),
    history: s.optional(s.array(s.lazy(() => historyItemSchema))),
  },
  { additionalProperties: s.json() },
);
