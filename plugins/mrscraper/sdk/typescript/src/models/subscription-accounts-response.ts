import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authSubscriptionAccountSchema, type AuthSubscriptionAccount } from "./auth-subscription-account.js";

export type SubscriptionAccountsResponse = {
  data?: AuthSubscriptionAccount;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionAccountsResponseSchema: Schema<SubscriptionAccountsResponse> =
  s.object<SubscriptionAccountsResponse>(
    {
      data: s.optional(s.lazy(() => authSubscriptionAccountSchema)),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
