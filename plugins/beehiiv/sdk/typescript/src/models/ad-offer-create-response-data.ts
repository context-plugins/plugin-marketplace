import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdOfferCreateResponseData = {
  /** The ID of the accepted ad offer. */
  offerId: string;
  /** The ID of the drafted and accepted opportunity created from the offer. */
  opportunityId: string;
  /** The ID of the advertisement creative selected for the opportunity. */
  advertisementId: string;
  /** The ID of the post where the opportunity was inserted. */
  postId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferCreateResponseDataSchema: Schema<AdOfferCreateResponseData> =
  s.object<AdOfferCreateResponseData>(
    {
      offerId: s.string(),
      opportunityId: s.string(),
      advertisementId: s.string(),
      postId: s.string(),
      _keysMap: {
        offerId: "offer_id",
        opportunityId: "opportunity_id",
        advertisementId: "advertisement_id",
        postId: "post_id",
      },
    },
    { additionalProperties: s.json() },
  );
