import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adOfferAdvertisementSchema, type AdOfferAdvertisement } from "./ad-offer-advertisement.js";

export type AdOfferAdvertisementsGetResponse = {
  /** A list of active advertisement creatives available for this offer. */
  advertisements: AdOfferAdvertisement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferAdvertisementsGetResponseSchema: Schema<AdOfferAdvertisementsGetResponse> =
  s.object<AdOfferAdvertisementsGetResponse>(
    {
      advertisements: s.array(s.lazy(() => adOfferAdvertisementSchema)),
    },
    { additionalProperties: s.json() },
  );
