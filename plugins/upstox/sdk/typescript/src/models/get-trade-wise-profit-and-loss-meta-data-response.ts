import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { tradeWiseMetaData1Schema, type TradeWiseMetaData1 } from "./trade-wise-meta-data1.js";

export type GetTradeWiseProfitAndLossMetaDataResponse = {
  status?: Status;
  /** Response data for brokerage */
  data?: TradeWiseMetaData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTradeWiseProfitAndLossMetaDataResponseSchema: Schema<GetTradeWiseProfitAndLossMetaDataResponse> =
  s.object<GetTradeWiseProfitAndLossMetaDataResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => tradeWiseMetaData1Schema)),
    },
    { additionalProperties: s.json() },
  );
