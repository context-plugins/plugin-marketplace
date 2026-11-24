import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Config to enabled subscribing to events from other projects in the org. */
export type OrganizationSubscription = {
  /** Required. Enable org level subscription. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSubscriptionSchema: Schema<OrganizationSubscription> =
  s.object<OrganizationSubscription>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
