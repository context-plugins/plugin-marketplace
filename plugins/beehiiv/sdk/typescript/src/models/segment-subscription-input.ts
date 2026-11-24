import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SegmentSubscriptionInput = {
  /** Discriminator value: subscriptions @default "subscriptions" */
  type?: "subscriptions";
  subscriptions: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSubscriptionInputSchema: Schema<SegmentSubscriptionInput> =
  s.object<SegmentSubscriptionInput>(
    {
      type: s.defaulted(s.literal("subscriptions"), "subscriptions"),
      subscriptions: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
