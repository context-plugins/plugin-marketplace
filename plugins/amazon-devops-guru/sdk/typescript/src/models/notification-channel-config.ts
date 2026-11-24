import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationFilterConfigSchema,
  type NotificationFilterConfig,
} from "./notification-filter-config.js";
import { snsChannelConfigSchema, type SnsChannelConfig } from "./sns-channel-config.js";

export type NotificationChannelConfig = {
  sns: SnsChannelConfig;
  filters?: NotificationFilterConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationChannelConfigSchema: Schema<NotificationChannelConfig> =
  s.object<NotificationChannelConfig>(
    {
      sns: snsChannelConfigSchema,
      filters: s.optional(s.lazy(() => notificationFilterConfigSchema)),
      _keysMap: {
        sns: "Sns",
        filters: "Filters",
      },
    },
    { additionalProperties: s.json() },
  );
