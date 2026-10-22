import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelNameSchema, type ChannelName } from "./unions/channel-name.js";

/**
 * An available organization-level channel target (i.e., one for which a channel target has not been
 * created in the current suborg).
 */
export type AvailableTarget = {
  /** Internal ID of the org with which the target is associated. */
  organizationId: number;
  /** Internal ID of the channel with which the target is associated. */
  channelId: number;
  /** Name of the channel with which the target is associated. */
  channelName: ChannelName;
  /** Org-level target. */
  target: string;
};

export const availableTargetSchema: Schema<AvailableTarget> = s.object<AvailableTarget>({
  organizationId: s.int(),
  channelId: s.int(),
  channelName: channelNameSchema,
  target: s.string(),
  _keysMap: {
    organizationId: "organization_id",
    channelId: "channel_id",
    channelName: "channel_name",
  },
});
