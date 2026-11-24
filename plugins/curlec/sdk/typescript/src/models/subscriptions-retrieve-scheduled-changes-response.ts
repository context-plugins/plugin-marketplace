import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubscriptionsRetrieveScheduledChangesResponse = {
  id?: string;
  entity?: string;
  changeScheduledAt?: number;
  status?: string;
  subscriptionId?: string;
  planId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsRetrieveScheduledChangesResponseSchema: Schema<SubscriptionsRetrieveScheduledChangesResponse> =
  s.object<SubscriptionsRetrieveScheduledChangesResponse>(
    {
      id: s.optional(s.string()),
      entity: s.optional(s.string()),
      changeScheduledAt: s.optional(s.int()),
      status: s.optional(s.string()),
      subscriptionId: s.optional(s.string()),
      planId: s.optional(s.string()),
      _keysMap: {
        changeScheduledAt: "change_scheduled_at",
        subscriptionId: "subscription_id",
        planId: "plan_id",
      },
    },
    { additionalProperties: s.json() },
  );
