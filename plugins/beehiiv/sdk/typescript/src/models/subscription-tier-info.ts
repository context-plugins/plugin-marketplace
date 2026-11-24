import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionTierInfoStatusSchema,
  type SubscriptionTierInfoStatus,
} from "./subscription-tier-info-status.js";

export type SubscriptionTierInfo = {
  /** The prefixed ID of the tier. */
  id: string;
  name: string;
  /** Returns whether or not the tier has any active prices. */
  status: SubscriptionTierInfoStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionTierInfoSchema: Schema<SubscriptionTierInfo> = s.object<SubscriptionTierInfo>(
  {
    id: s.string(),
    name: s.string(),
    status: subscriptionTierInfoStatusSchema,
  },
  { additionalProperties: s.json() },
);
