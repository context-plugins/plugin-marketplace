import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelServices2Schema, type ChannelServices2 } from "./channel-services2.js";
import {
  organizationChannelConfig1Schema,
  type OrganizationChannelConfig1,
} from "./organization-channel-config1.js";
import { supportedModesSchema, type SupportedModes } from "./unions/supported-modes.js";

/** Request model to create a channel through the organizations API */
export type OrganizationChannelCreateRequest = {
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
  /** The configuration of the channel */
  config: OrganizationChannelConfig1;
};

export const organizationChannelCreateRequestSchema: Schema<OrganizationChannelCreateRequest> =
  s.object<OrganizationChannelCreateRequest>({
    name: s.string(),
    channelService: channelServices2Schema,
    supportedModes: s.optional(s.lazy(() => supportedModesSchema)),
    isSystemChannel: s.defaulted(s.boolean(), true),
    config: organizationChannelConfig1Schema,
    _keysMap: {
      channelService: "channel_service",
      supportedModes: "supported_modes",
      isSystemChannel: "is_system_channel",
    },
  });
