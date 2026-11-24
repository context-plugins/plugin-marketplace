import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import {
  tradeHistoryResponseMetaDataSchema,
  type TradeHistoryResponseMetaData,
} from "./trade-history-response-meta-data.js";
import {
  tradeHistoryResponseTradeDataSchema,
  type TradeHistoryResponseTradeData,
} from "./trade-history-response-trade-data.js";

export type TradeHistoryResponse = {
  status?: Status;
  data?: TradeHistoryResponseTradeData[];
  metaData?: TradeHistoryResponseMetaData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeHistoryResponseSchema: Schema<TradeHistoryResponse> = s.object<TradeHistoryResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => tradeHistoryResponseTradeDataSchema))),
    metaData: s.optional(s.lazy(() => tradeHistoryResponseMetaDataSchema)),
  },
  { additionalProperties: s.json() },
);
