import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookAuthStatusSchema, type WebhookAuthStatus } from "./webhook-auth-status.js";

export type Messaging = {
  webhookUrl?: string | null;
  /**
   * How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
   */
  webhookAuth?: WebhookAuthStatus | null;
  enabled?: boolean;
  /**
   * Whether A2P messaging registration has completed for this number. Provisions asynchronously
   * after purchase.
   */
  ready?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messagingProperties: s.Shape<Messaging> = {
  webhookUrl: s.optionalNullable(s.string()),
  webhookAuth: s.optionalNullable(s.lazy(() => webhookAuthStatusSchema)),
  enabled: s.optional(s.boolean()),
  ready: s.optionalNullable(s.boolean()),
};

export const messagingInternalSchema: Schema<Messaging> = s.object<Messaging>(messagingProperties, {
  additionalProperties: s.json(),
});

export const messagingSchema: Schema<Messaging> = s.lazySchema(() =>
  s.object<Messaging>(
    {
      ...messagingProperties,
      webhookUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
