import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profitAndLossMetaDataWrapperSchema,
  type ProfitAndLossMetaDataWrapper,
} from "./profit-and-loss-meta-data-wrapper.js";
import { statusSchema, type Status } from "./status.js";
import {
  tradeWiseProfitAndLossDataSchema,
  type TradeWiseProfitAndLossData,
} from "./trade-wise-profit-and-loss-data.js";

export type GetTradeWiseProfitAndLossDataResponse = {
  status?: Status;
  /** Response data for trade wise data details */
  data?: TradeWiseProfitAndLossData[];
  metadata?: ProfitAndLossMetaDataWrapper;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTradeWiseProfitAndLossDataResponseSchema: Schema<GetTradeWiseProfitAndLossDataResponse> =
  s.object<GetTradeWiseProfitAndLossDataResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => tradeWiseProfitAndLossDataSchema))),
      metadata: s.optional(s.lazy(() => profitAndLossMetaDataWrapperSchema)),
    },
    { additionalProperties: s.json() },
  );
