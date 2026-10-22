import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Subset of [[ChannelTargetProperties]] that is valid as ``order_by``. Filter-only fields are
 * excluded so the generated OpenAPI client does not surface them as sortable.
 */
export const ChannelTargetOrderProperties = {
  Id: "id",
  ChannelId: "channel_id",
  ChannelName: "channel_name",
  AgentId: "agent_id",
  Target: "target",
  TargetMode: "target_mode",
  FallbackTarget: "fallback_target",
  IsTest: "is_test",
  UpdatedAt: "updated_at",
  A2PVerified: "a2p_verified",
} as const;
export type ChannelTargetOrderProperties =
  | (typeof ChannelTargetOrderProperties)[keyof typeof ChannelTargetOrderProperties]
  | (string & {});

export const channelTargetOrderPropertiesSchema: EnumSchema<ChannelTargetOrderProperties> =
  s.enumOf<ChannelTargetOrderProperties>(ChannelTargetOrderProperties);
