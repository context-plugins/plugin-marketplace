import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotificationsMessagesTestRequest = {
  /** The event type Id to be triggered. refer to /events/types/ for full list. */
  eventTypeId: string;
  /** Text field to be supplied and replayed back. */
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsMessagesTestRequestSchema: Schema<NotificationsMessagesTestRequest> =
  s.object<NotificationsMessagesTestRequest>(
    {
      eventTypeId: s.string(),
      text: s.optional(s.string()),
      _keysMap: {
        text: "Text",
      },
    },
    { additionalProperties: s.json() },
  );
