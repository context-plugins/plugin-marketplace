import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import {
  item1CompSniperMarketplaceAndShippingPsaApiSchema,
  type Item1CompSniperMarketplaceAndShippingPsaApi,
} from "./item1-comp-sniper-marketplace-and-shipping-psa-api.js";
import { populationSchema, type Population } from "./population.js";
import { priceByGradeSchema, type PriceByGrade } from "./price-by-grade.js";
import { priceSummarySchema, type PriceSummary } from "./price-summary.js";

export type V1PsaCardResponse = {
  card?: Card;
  priceByGrade?: PriceByGrade[];
  population?: Population | null;
  items?: Item1CompSniperMarketplaceAndShippingPsaApi[];
  /** Deterministic price intelligence over the returned sold items. */
  summary?: PriceSummary | null;
  otherMatches?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaCardResponseSchema: Schema<V1PsaCardResponse> = s.object<V1PsaCardResponse>(
  {
    card: s.optional(s.lazy(() => cardSchema)),
    priceByGrade: s.optional(s.array(s.lazy(() => priceByGradeSchema))),
    population: s.optionalNullable(s.lazy(() => populationSchema)),
    items: s.optional(s.array(s.lazy(() => item1CompSniperMarketplaceAndShippingPsaApiSchema))),
    summary: s.optionalNullable(s.lazy(() => priceSummarySchema)),
    otherMatches: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
