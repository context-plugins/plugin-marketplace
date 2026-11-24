import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdNetworkReport = {
  /** The prefixed ID of the publication that ran the advertisement. */
  publicationId: string;
  /** The prefixed ID of the post containing the advertisement. */
  postId: string;
  /** The ID used to attribute engagement events to the advertisement. */
  adLinkId: string;
  /** The approved number of unique opens. */
  opens: number;
  /** The approved number of verified clicks. */
  verifiedClicks: number;
  /** The formatted revenue approved for payment. */
  revenue: string;
  /**
   * Whether the advertisement was placed through a programmatic ad slot instead of an on-demand
   * offer.
   */
  isProgrammatic: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adNetworkReportSchema: Schema<AdNetworkReport> = s.object<AdNetworkReport>(
  {
    publicationId: s.string(),
    postId: s.string(),
    adLinkId: s.string(),
    opens: s.int(),
    verifiedClicks: s.int(),
    revenue: s.string(),
    isProgrammatic: s.boolean(),
    _keysMap: {
      publicationId: "publication_id",
      postId: "post_id",
      adLinkId: "ad_link_id",
      verifiedClicks: "verified_clicks",
      isProgrammatic: "is_programmatic",
    },
  },
  { additionalProperties: s.json() },
);
