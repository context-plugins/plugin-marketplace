import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookInput = {
  /** Public https endpoint (test mode allows localhost). */
  url: string;
  /** Subset of the 5 events, or ["*"]. */
  events?: string[];
  description?: string;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookInputProperties: s.Shape<WebhookInput> = {
  url: s.string(),
  events: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
};

export const webhookInputInternalSchema: Schema<WebhookInput> = s.object<WebhookInput>(
  webhookInputProperties,
  { additionalProperties: s.json() },
);

export const webhookInputSchema: Schema<WebhookInput> = s.lazySchema(() =>
  s.object<WebhookInput>(
    {
      ...webhookInputProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
