import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TradeHistoryResponsePageData = {
  pageNumber?: number;
  pageSize?: number;
  totalRecords?: number;
  totalPages?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeHistoryResponsePageDataSchema: Schema<TradeHistoryResponsePageData> =
  s.object<TradeHistoryResponsePageData>(
    {
      pageNumber: s.optional(s.int()),
      pageSize: s.optional(s.int()),
      totalRecords: s.optional(s.int()),
      totalPages: s.optional(s.int()),
      _keysMap: {
        pageNumber: "page_number",
        pageSize: "page_size",
        totalRecords: "total_records",
        totalPages: "total_pages",
      },
    },
    { additionalProperties: s.json() },
  );
