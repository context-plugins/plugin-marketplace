import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyEntrySchema, type HistoryEntry } from "./history-entry.js";

export type HistoryResponse = {
  /**
   * ISO currency code every amount in this page is in. On the page rather than on each entry: the
   * account pins one price for its whole life (spec section 8), so no two entries can differ.
   */
  currency: string;
  /** Ledger entries in the current page, newest first. */
  entries: HistoryEntry[];
  /** Whether another page of results is available. */
  hasMore: boolean;
  /** Cursor for the next page of results. */
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyResponseSchema: Schema<HistoryResponse> = s.object<HistoryResponse>(
  {
    currency: s.string(),
    entries: s.array(s.lazy(() => historyEntrySchema)),
    hasMore: s.boolean(),
    nextCursor: s.optional(s.string()),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
