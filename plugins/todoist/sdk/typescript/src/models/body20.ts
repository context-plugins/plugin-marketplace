import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { notificationTypeSchema, type NotificationType } from "./notification-type.js";

export type Body20 = {
  /** Notification type to update. */
  notificationType: NotificationType;
  /** Notification channel to update. */
  service: NotificationChannel;
  /** Whether notifications should be disabled for the selected type and channel. */
  dontNotify?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body20Schema: Schema<Body20> = s.object<Body20>(
  {
    notificationType: notificationTypeSchema,
    service: notificationChannelSchema,
    dontNotify: s.optionalNullable(s.boolean()),
    _keysMap: {
      notificationType: "notification_type",
      dontNotify: "dont_notify",
    },
  },
  { additionalProperties: s.json() },
);
