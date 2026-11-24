import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org.
 */
export type OrganizationSubscription2 = {
  /** Required. Enable org level subscription. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSubscription2Schema: Schema<OrganizationSubscription2> =
  s.object<OrganizationSubscription2>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
