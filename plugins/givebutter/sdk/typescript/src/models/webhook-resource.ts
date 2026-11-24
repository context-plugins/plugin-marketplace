import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookResource = {
  id: string;
  name: string | null;
  signature?: string | null;
  events: Record<string, unknown>[];
  enabled: boolean;
  url: string;
  lastStatus: string;
  lastStatusDescription: string;
  lastUsedAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookResourceSchema: Schema<WebhookResource> = s.object<WebhookResource>(
  {
    id: s.string(),
    name: s.nullable(s.string()),
    signature: s.optionalNullable(s.string()),
    events: s.array(s.record(s.string(), s.unknown())),
    enabled: s.boolean(),
    url: s.string(),
    lastStatus: s.string(),
    lastStatusDescription: s.string(),
    lastUsedAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      lastStatus: "last_status",
      lastStatusDescription: "last_status_description",
      lastUsedAt: "last_used_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
