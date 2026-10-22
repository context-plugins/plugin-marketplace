import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Names of channel target fields supported for filtering on the full channel targets list endpoint.
 * Superset of [[ChannelTargetOrderProperties]] — includes filter-only fields like
 * ``target_mode_list`` that are not valid as ``order_by``.
 */
export const ChannelTargetProperties = {
  Id: "id",
  ChannelId: "channel_id",
  ChannelName: "channel_name",
  AgentId: "agent_id",
  Target: "target",
  TargetMode: "target_mode",
  TargetModeList: "target_mode_list",
  FallbackTarget: "fallback_target",
  IsTest: "is_test",
  UpdatedAt: "updated_at",
  A2PVerified: "a2p_verified",
} as const;
export type ChannelTargetProperties =
  | (typeof ChannelTargetProperties)[keyof typeof ChannelTargetProperties]
  | (string & {});

export const channelTargetPropertiesSchema: EnumSchema<ChannelTargetProperties> =
  s.enumOf<ChannelTargetProperties>(ChannelTargetProperties);
