import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adOfferSchema, type AdOffer } from "./ad-offer.js";

export type AdOffersGetResponse = {
  /** A list of ad offers available for this publication. */
  offers: AdOffer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOffersGetResponseSchema: Schema<AdOffersGetResponse> = s.object<AdOffersGetResponse>(
  {
    offers: s.array(s.lazy(() => adOfferSchema)),
  },
  { additionalProperties: s.json() },
);
