import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links6Schema, type Links6 } from "./links6.js";
import { payloadSchema, type Payload } from "./payload.js";

export type NotificationsWebhooksMessagesResponse1 = {
  /** unique identifer in the form of uuid for the webhook message. */
  id?: string;
  /** unique identifer in the form of uuid for the webhook. */
  webhookId?: string;
  event?: string;
  eventTypeId?: string;
  eventId?: string;
  payload?: Payload;
  attempts?: string[];
  links?: Links6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsWebhooksMessagesResponse1Schema: Schema<NotificationsWebhooksMessagesResponse1> =
  s.object<NotificationsWebhooksMessagesResponse1>(
    {
      id: s.optional(s.string()),
      webhookId: s.optional(s.string()),
      event: s.optional(s.string()),
      eventTypeId: s.optional(s.string()),
      eventId: s.optional(s.string()),
      payload: s.optional(s.lazy(() => payloadSchema)),
      attempts: s.optional(s.array(s.string())),
      links: s.optional(s.lazy(() => links6Schema)),
    },
    { additionalProperties: s.json() },
  );
