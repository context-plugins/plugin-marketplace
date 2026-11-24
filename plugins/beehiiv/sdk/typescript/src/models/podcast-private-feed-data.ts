import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastShowData1Schema, type PodcastShowData1 } from "./podcast-show-data1.js";
import { subscriptionData1Schema, type SubscriptionData1 } from "./subscription-data1.js";

export type PodcastPrivateFeedData = {
  /** The prefixed ID of the private feed token. */
  id: string;
  /** The personalized private RSS feed URL. */
  url: string;
  /** The time the private feed token was created. Measured in seconds since the Unix epoch. */
  created: number;
  /**
   * The time the private feed was first fetched by a recognized podcast app. Measured in seconds
   * since the Unix epoch. Null when the feed has not been activated.
   */
  activated?: number;
  /**
   * The time the private feed token was revoked. Measured in seconds since the Unix epoch. Null
   * when the token has not been revoked.
   */
  revoked?: number;
  /**
   * The time the private feed token expires. Measured in seconds since the Unix epoch. Null when
   * the token does not expire.
   */
  expires?: number;
  /** The subscription associated with the private feed token. */
  subscription: SubscriptionData1;
  /** The podcast associated with the private feed token. */
  show: PodcastShowData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastPrivateFeedDataSchema: Schema<PodcastPrivateFeedData> = s.object<PodcastPrivateFeedData>(
  {
    id: s.string(),
    url: s.string(),
    created: s.int(),
    activated: s.optional(s.int()),
    revoked: s.optional(s.int()),
    expires: s.optional(s.int()),
    subscription: subscriptionData1Schema,
    show: podcastShowData1Schema,
  },
  { additionalProperties: s.json() },
);
