import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Webhook = {
  id?: string;
  url?: string;
  events?: string[];
  active?: boolean;
  description?: string | null;
  createdAt?: Date;
  revokedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  events: s.optional(s.array(s.string())),
  active: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  revokedAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    createdAt: "created_at",
    revokedAt: "revoked_at",
  },
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
