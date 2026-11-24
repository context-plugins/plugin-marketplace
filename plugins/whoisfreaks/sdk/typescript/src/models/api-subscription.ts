import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiSubscription = {
  requestLimit?: number;
  servedRequests?: number;
  subscriptionStatus?: string;
  surchargeRequestLimit?: number;
  servedSurchargeRequests?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiSubscriptionSchema: Schema<ApiSubscription> = s.object<ApiSubscription>(
  {
    requestLimit: s.optional(s.int()),
    servedRequests: s.optional(s.int()),
    subscriptionStatus: s.optional(s.string()),
    surchargeRequestLimit: s.optional(s.int()),
    servedSurchargeRequests: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
