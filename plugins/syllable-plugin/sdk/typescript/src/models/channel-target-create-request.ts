import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { targetModes1Schema, type TargetModes1 } from "./target-modes1.js";
import { fallbackTargetSchema, type FallbackTarget } from "./unions/fallback-target.js";

/** Request model to create a channel target. */
export type ChannelTargetCreateRequest = {
  /** The internal ID of the agent associated with the channel target */
  agentId: number;
  /** The internal ID of the channel associated with the channel target */
  channelId: number;
  /**
   * The name of the channel target. Must correspond to an organization-level target (available
   * targets can be fetched from `/channels/available-targets`).
   */
  target: string;
  /**
   * The mode of the channel target (must match one of the supported modes of the associated
   * channel)
   */
  targetMode: TargetModes1;
  /** The fallback for the channel target (currently only supported for "voice" mode) */
  fallbackTarget?: FallbackTarget;
  /**
   * Whether the channel target is intended for testing. If true, any sessions created through this
   * target will be labeled as a test session (i.e., will not be included in dashboard data and can
   * easily be filtered out in the Sessions screen in the SyllableConsole).
   *
   * @default false
   */
  isTest?: boolean;
};

export const channelTargetCreateRequestSchema: Schema<ChannelTargetCreateRequest> =
  s.object<ChannelTargetCreateRequest>({
    agentId: s.int(),
    channelId: s.int(),
    target: s.string(),
    targetMode: targetModes1Schema,
    fallbackTarget: s.optional(s.lazy(() => fallbackTargetSchema)),
    isTest: s.defaulted(s.boolean(), false),
    _keysMap: {
      agentId: "agent_id",
      channelId: "channel_id",
      targetMode: "target_mode",
      fallbackTarget: "fallback_target",
      isTest: "is_test",
    },
  });
