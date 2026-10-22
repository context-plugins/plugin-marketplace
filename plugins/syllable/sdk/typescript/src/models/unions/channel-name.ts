import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the channel with which the target is associated. */
export type ChannelName = string;

export const channelNameSchema: Schema<ChannelName> = s.of<ChannelName>(s.union([s.string()]));
