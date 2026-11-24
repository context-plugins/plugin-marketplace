import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Pub/Sub topic and subscription used by Eventarc as a transport intermediary. */
export type Pubsub1 = {
  /**
   * Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the
   * event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing
   * topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you
   * provide here is not deleted by Eventarc at trigger deletion.
   */
  topic?: string;
  /**
   * Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a
   * transport for the event delivery. Format:
   * `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`.
   */
  subscription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pubsub1Schema: Schema<Pubsub1> = s.object<Pubsub1>(
  {
    topic: s.optional(s.string()),
    subscription: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
