import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiCreditsSchema, type ApiCredits } from "./api-credits.js";
import { apiSubscriptionSchema, type ApiSubscription } from "./api-subscription.js";

export type AccountUsageResponse = {
  apiKey?: string;
  apiCredits?: ApiCredits;
  apiSubscription?: ApiSubscription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountUsageResponseSchema: Schema<AccountUsageResponse> = s.object<AccountUsageResponse>(
  {
    apiKey: s.optional(s.string()),
    apiCredits: s.optional(s.lazy(() => apiCreditsSchema)),
    apiSubscription: s.optional(s.lazy(() => apiSubscriptionSchema)),
  },
  { additionalProperties: s.json() },
);
