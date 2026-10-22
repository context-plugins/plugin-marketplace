import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelServices2Schema, type ChannelServices2 } from "./channel-services2.js";
import { config4Schema, type Config4 } from "./unions/config4.js";
import { supportedModesSchema, type SupportedModes } from "./unions/supported-modes.js";

export type Channel = {
  /** The channel name */
  name: string;
  /** The service that facilitates communication on the channel */
  channelService: ChannelServices2;
  /**
   * The comma-delimited list of supported modes for the channel, which defines the possible
   * communication methods for channel targets linked to it.
   */
  supportedModes?: SupportedModes;
  /** Whether the channel is a built-in system channel (i.e., is not customizable) @default true */
  isSystemChannel?: boolean;
  /** The channel ID */
  id: number;
  /** Configuration for the channel */
  config?: Config4;
};

export const channelSchema: Schema<Channel> = s.object<Channel>({
  name: s.string(),
  channelService: channelServices2Schema,
  supportedModes: s.optional(s.lazy(() => supportedModesSchema)),
  isSystemChannel: s.defaulted(s.boolean(), true),
  id: s.int(),
  config: s.optional(s.lazy(() => config4Schema)),
  _keysMap: {
    channelService: "channel_service",
    supportedModes: "supported_modes",
    isSystemChannel: "is_system_channel",
  },
});
