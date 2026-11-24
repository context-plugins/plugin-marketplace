import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adOfferCreateResponseDataSchema,
  type AdOfferCreateResponseData,
} from "./ad-offer-create-response-data.js";

export type AdOfferCreateResponse = {
  data: AdOfferCreateResponseData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferCreateResponseSchema: Schema<AdOfferCreateResponse> = s.object<AdOfferCreateResponse>(
  {
    data: adOfferCreateResponseDataSchema,
  },
  { additionalProperties: s.json() },
);
