import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookCreated = {
  id?: string;
  url?: string;
  events?: string[];
  active?: boolean;
  description?: string | null;
  createdAt?: Date;
  revokedAt?: Date | null;
  /** Plaintext signing secret (whsec_*). Shown only once, at creation. */
  secret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreatedProperties: s.Shape<WebhookCreated> = {
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  events: s.optional(s.array(s.string())),
  active: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  revokedAt: s.optionalNullable(s.dateTime()),
  secret: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    revokedAt: "revoked_at",
  },
};

export const webhookCreatedInternalSchema: Schema<WebhookCreated> = s.object<WebhookCreated>(
  webhookCreatedProperties,
  { additionalProperties: s.json() },
);

export const webhookCreatedSchema: Schema<WebhookCreated> = s.lazySchema(() =>
  s.object<WebhookCreated>(
    {
      ...webhookCreatedProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
