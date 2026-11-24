import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionsPatchResponseDataSchema,
  type SubscriptionsPatchResponseData,
} from "./subscriptions-patch-response-data.js";

export type SubscriptionsPatchResponse = {
  data: SubscriptionsPatchResponseData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsPatchResponseSchema: Schema<SubscriptionsPatchResponse> =
  s.object<SubscriptionsPatchResponse>(
    {
      data: subscriptionsPatchResponseDataSchema,
    },
    { additionalProperties: s.json() },
  );
