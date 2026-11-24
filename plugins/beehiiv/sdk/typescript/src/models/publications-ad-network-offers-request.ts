import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsAdNetworkOffersRequest = {
  /** The ID of the ad offer to accept. */
  offerId: string;
  /** The ID of the advertisement creative to use. */
  advertisementId: string;
  /** The ID of the post where the advertisement should be inserted. */
  postId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsAdNetworkOffersRequestSchema: Schema<PublicationsAdNetworkOffersRequest> =
  s.object<PublicationsAdNetworkOffersRequest>(
    {
      offerId: s.string(),
      advertisementId: s.string(),
      postId: s.string(),
      _keysMap: {
        offerId: "offer_id",
        advertisementId: "advertisement_id",
        postId: "post_id",
      },
    },
    { additionalProperties: s.json() },
  );
