import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1PushNotificationTarget3Schema,
  type Clixexternalv1PushNotificationTarget3,
} from "./unions/clixexternalv1-push-notification-target3.js";

/** A push notification to be sent to a user device. */
export type Clixexternalv1PushNotification = {
  /** Target device and/or user for the push notification. */
  target?: Clixexternalv1PushNotificationTarget3;
  /** Title of the push notification. */
  title?: string;
  /** Body content of the push notification. */
  body?: string;
  /** URL of the image to display in the push notification (optional). */
  imageUrl?: string;
  /** URL to open when the notification is clicked (optional). */
  landingUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1PushNotificationSchema: Schema<Clixexternalv1PushNotification> =
  s.object<Clixexternalv1PushNotification>(
    {
      target: s.optional(s.lazy(() => clixexternalv1PushNotificationTarget3Schema)),
      title: s.optional(s.string()),
      body: s.optional(s.string()),
      imageUrl: s.optional(s.string()),
      landingUrl: s.optional(s.string()),
      _keysMap: {
        imageUrl: "image_url",
        landingUrl: "landing_url",
      },
    },
    { additionalProperties: s.json() },
  );
