import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tradeHistoryResponsePageDataSchema,
  type TradeHistoryResponsePageData,
} from "./trade-history-response-page-data.js";

export type TradeHistoryResponseMetaData = {
  page?: TradeHistoryResponsePageData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeHistoryResponseMetaDataSchema: Schema<TradeHistoryResponseMetaData> =
  s.object<TradeHistoryResponseMetaData>(
    {
      page: s.optional(s.lazy(() => tradeHistoryResponsePageDataSchema)),
    },
    { additionalProperties: s.json() },
  );
