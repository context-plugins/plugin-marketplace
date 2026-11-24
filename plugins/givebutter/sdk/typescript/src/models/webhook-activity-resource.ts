import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookActivityResource = {
  id: string;
  webhookId: string;
  status: string;
  statusDescription: string;
  event: string;
  url: string;
  payload: Record<string, unknown>[];
  response: Record<string, unknown>[] | null;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookActivityResourceSchema: Schema<WebhookActivityResource> =
  s.object<WebhookActivityResource>(
    {
      id: s.string(),
      webhookId: s.string(),
      status: s.string(),
      statusDescription: s.string(),
      event: s.string(),
      url: s.string(),
      payload: s.array(s.record(s.string(), s.unknown())),
      response: s.nullable(s.array(s.record(s.string(), s.unknown()))),
      createdAt: s.string(),
      updatedAt: s.string(),
      _keysMap: {
        webhookId: "webhook_id",
        statusDescription: "status_description",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
