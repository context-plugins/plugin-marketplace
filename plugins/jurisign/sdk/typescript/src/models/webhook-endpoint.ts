import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statsJuriSignWebhooksApiSchema,
  type StatsJuriSignWebhooksApi,
} from "./stats-juri-sign-webhooks-api.js";

export type WebhookEndpoint = {
  id?: number;
  url?: string;
  /** Full secret only shown on creation */
  secret?: string;
  events?: string[];
  isActive?: boolean;
  createdAt?: Date;
  stats?: StatsJuriSignWebhooksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookEndpointProperties: s.Shape<WebhookEndpoint> = {
  id: s.optional(s.int()),
  url: s.optional(s.string()),
  secret: s.optional(s.string()),
  events: s.optional(s.array(s.string())),
  isActive: s.optional(s.boolean()),
  createdAt: s.optional(s.dateTime()),
  stats: s.optional(s.lazy(() => statsJuriSignWebhooksApiSchema)),
  _keysMap: {
    isActive: "is_active",
    createdAt: "created_at",
  },
};

export const webhookEndpointInternalSchema: Schema<WebhookEndpoint> = s.object<WebhookEndpoint>(
  webhookEndpointProperties,
  { additionalProperties: s.json() },
);

export const webhookEndpointSchema: Schema<WebhookEndpoint> = s.lazySchema(() =>
  s.object<WebhookEndpoint>(
    {
      ...webhookEndpointProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
