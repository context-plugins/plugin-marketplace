import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { tradeDataSchema, type TradeData } from "./trade-data.js";

export type GetTradeResponse = {
  status?: Status;
  /** Response data for trades */
  data?: TradeData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTradeResponseSchema: Schema<GetTradeResponse> = s.object<GetTradeResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => tradeDataSchema))),
  },
  { additionalProperties: s.json() },
);
