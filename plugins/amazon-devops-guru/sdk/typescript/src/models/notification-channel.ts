import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationChannelConfigSchema,
  type NotificationChannelConfig,
} from "./notification-channel-config.js";

export type NotificationChannel = {
  /** The ID of a notification channel. */
  id?: string;
  config?: NotificationChannelConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationChannelSchema: Schema<NotificationChannel> = s.object<NotificationChannel>(
  {
    id: s.optional(s.string()),
    config: s.optional(s.lazy(() => notificationChannelConfigSchema)),
    _keysMap: {
      id: "Id",
      config: "Config",
    },
  },
  { additionalProperties: s.json() },
);
