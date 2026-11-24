import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postDataSchema, type PostData } from "./post-data.js";

export type PostBeehiivWebhooksApi = {
  /** The prefixed event ID, unique to each webhook event. */
  uid?: string;
  /** The date the event was created. Measured in seconds since the Unix epoch. */
  eventTimestamp?: number;
  /** The event type. */
  eventType?: string;
  data?: PostData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postBeehiivWebhooksApiSchema: Schema<PostBeehiivWebhooksApi> = s.object<PostBeehiivWebhooksApi>(
  {
    uid: s.optional(s.string()),
    eventTimestamp: s.optional(s.int()),
    eventType: s.optional(s.string()),
    data: s.optional(s.lazy(() => postDataSchema)),
    _keysMap: {
      eventTimestamp: "event_timestamp",
      eventType: "event_type",
    },
  },
  { additionalProperties: s.json() },
);
