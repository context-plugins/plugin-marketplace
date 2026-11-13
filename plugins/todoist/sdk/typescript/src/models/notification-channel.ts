import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which communication mechanism is being used to send this notification */
export const NotificationChannel = {
  Email: "email",
  Push: "push",
} as const;
export type NotificationChannel =
  | (typeof NotificationChannel)[keyof typeof NotificationChannel]
  | (string & {});

export const notificationChannelSchema: EnumSchema<NotificationChannel> =
  s.enumOf<NotificationChannel>(NotificationChannel);
