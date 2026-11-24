import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1PushNotificationSchema,
  type Clixexternalv1PushNotification,
} from "./clixexternalv1-push-notification.js";

/** Request schema for sending push notifications. */
export type V1SendPushNotificationsRequest = {
  /** List of push notifications to send. (We recommend sending up to 500 push notifications.) */
  pushNotifications?: Clixexternalv1PushNotification[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SendPushNotificationsRequestSchema: Schema<V1SendPushNotificationsRequest> =
  s.object<V1SendPushNotificationsRequest>(
    {
      pushNotifications: s.optional(s.array(s.lazy(() => clixexternalv1PushNotificationSchema))),
      _keysMap: {
        pushNotifications: "push_notifications",
      },
    },
    { additionalProperties: s.json() },
  );
