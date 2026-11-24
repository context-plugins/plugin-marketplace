import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastPrivateFeedDataSchema, type PodcastPrivateFeedData } from "./podcast-private-feed-data.js";

export type PodcastPrivateFeed = {
  /** The prefixed event ID, unique to each webhook event. */
  uid?: string;
  /** The date the event was created. Measured in seconds since the Unix epoch. */
  eventTimestamp?: number;
  /** The event type. */
  eventType?: string;
  data?: PodcastPrivateFeedData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastPrivateFeedSchema: Schema<PodcastPrivateFeed> = s.object<PodcastPrivateFeed>(
  {
    uid: s.optional(s.string()),
    eventTimestamp: s.optional(s.int()),
    eventType: s.optional(s.string()),
    data: s.optional(s.lazy(() => podcastPrivateFeedDataSchema)),
    _keysMap: {
      eventTimestamp: "event_timestamp",
      eventType: "event_type",
    },
  },
  { additionalProperties: s.json() },
);
