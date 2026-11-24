import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionActorDtoSchema, type SubscriptionActorDto } from "./subscription-actor-dto.js";

/** Subscription status and change actor information. */
export type SubscriptionStatusWithActorDto = {
  /**
   * Set as `true` if the subscription is enabled. When you create a new subscription, this value is
   * set as `true` by default.
   */
  enabled?: boolean;
  /**
   * Reason for changing the subscription status. This field is used by BILL for informing you when
   * the `enabled` field is set as `false`.
   */
  reason?: string;
  actor?: SubscriptionActorDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionStatusWithActorDtoSchema: Schema<SubscriptionStatusWithActorDto> =
  s.object<SubscriptionStatusWithActorDto>(
    {
      enabled: s.optional(s.boolean()),
      reason: s.optional(s.string()),
      actor: s.optional(s.lazy(() => subscriptionActorDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
