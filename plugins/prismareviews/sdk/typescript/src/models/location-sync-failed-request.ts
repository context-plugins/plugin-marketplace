import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type LocationSyncFailedRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSyncFailedRequestSchema: Schema<LocationSyncFailedRequest> =
  s.object<LocationSyncFailedRequest>(
    {
      id: s.string(),
      type: webhookEventTypeSchema,
      createdAt: s.dateTime(),
      data: data6Schema,
      _keysMap: {
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
