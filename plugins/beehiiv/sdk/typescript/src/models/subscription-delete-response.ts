import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubscriptionDeleteResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionDeleteResponseSchema: Schema<SubscriptionDeleteResponse> =
  s.object<SubscriptionDeleteResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
