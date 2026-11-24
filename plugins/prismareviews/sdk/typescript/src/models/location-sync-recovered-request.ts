import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data7Schema, type Data7 } from "./data7.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type LocationSyncRecoveredRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSyncRecoveredRequestSchema: Schema<LocationSyncRecoveredRequest> =
  s.object<LocationSyncRecoveredRequest>(
    {
      id: s.string(),
      type: webhookEventTypeSchema,
      createdAt: s.dateTime(),
      data: data7Schema,
      _keysMap: {
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
