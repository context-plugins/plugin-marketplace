import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationChannelConfigSchema,
  type NotificationChannelConfig,
} from "./notification-channel-config.js";

export type ChannelsRequest = {
  config: NotificationChannelConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelsRequestSchema: Schema<ChannelsRequest> = s.object<ChannelsRequest>(
  {
    config: notificationChannelConfigSchema,
    _keysMap: {
      config: "Config",
    },
  },
  { additionalProperties: s.json() },
);
