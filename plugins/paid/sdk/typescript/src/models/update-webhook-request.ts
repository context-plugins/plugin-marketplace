import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateWebhookRequest = {
  /** Whether the webhook is enabled for delivery. */
  enabled?: boolean;
  /**
   * The HTTPS endpoint Paid should deliver this webhook to. Set to null to clear it while disabled.
   */
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateWebhookRequestProperties: s.Shape<UpdateWebhookRequest> = {
  enabled: s.optional(s.boolean()),
  url: s.optionalNullable(s.string()),
};

export const updateWebhookRequestInternalSchema: Schema<UpdateWebhookRequest> =
  s.object<UpdateWebhookRequest>(updateWebhookRequestProperties, { additionalProperties: s.json() });

export const updateWebhookRequestSchema: Schema<UpdateWebhookRequest> = s.lazySchema(() =>
  s.object<UpdateWebhookRequest>(
    {
      ...updateWebhookRequestProperties,
      url: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
