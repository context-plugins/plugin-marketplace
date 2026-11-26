import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotificationRecipient = {
  id?: string;
  name?: string;
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notificationRecipientProperties: s.Shape<NotificationRecipient> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
};

export const notificationRecipientInternalSchema: Schema<NotificationRecipient> =
  s.object<NotificationRecipient>(notificationRecipientProperties, { additionalProperties: s.json() });

export const notificationRecipientSchema: Schema<NotificationRecipient> = s.lazySchema(() =>
  s.object<NotificationRecipient>(
    {
      ...notificationRecipientProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
