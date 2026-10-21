import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of channel fields supported for filtering/sorting on list endpoint. */
export const ChannelProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  ChannelService: "channel_service",
  SupportedModes: "supported_modes",
  Config: "config",
} as const;
export type ChannelProperties = (typeof ChannelProperties)[keyof typeof ChannelProperties] | (string & {});

export const channelPropertiesSchema: EnumSchema<ChannelProperties> =
  s.enumOf<ChannelProperties>(ChannelProperties);
