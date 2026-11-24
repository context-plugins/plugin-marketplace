import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";

export type MarketSoldPriceStatsResponse = {
  ok: boolean;
  data: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const marketSoldPriceStatsResponseProperties: s.Shape<MarketSoldPriceStatsResponse> = {
  ok: s.boolean(),
  data: dataInternalSchema,
};

export const marketSoldPriceStatsResponseInternalSchema: Schema<MarketSoldPriceStatsResponse> =
  s.object<MarketSoldPriceStatsResponse>(marketSoldPriceStatsResponseProperties, {
    additionalProperties: s.json(),
  });

export const marketSoldPriceStatsResponseSchema: Schema<MarketSoldPriceStatsResponse> = s.lazySchema(() =>
  s.object<MarketSoldPriceStatsResponse>(
    {
      ...marketSoldPriceStatsResponseProperties,
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  ),
);
