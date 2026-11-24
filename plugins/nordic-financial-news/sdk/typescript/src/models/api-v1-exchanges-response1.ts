import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeDetailSchema, type ExchangeDetail } from "./exchange-detail.js";

export type ApiV1ExchangesResponse1 = {
  exchange: ExchangeDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ExchangesResponse1Schema: Schema<ApiV1ExchangesResponse1> =
  s.object<ApiV1ExchangesResponse1>(
    {
      exchange: exchangeDetailSchema,
    },
    { additionalProperties: s.json() },
  );
