import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { targetModes1Schema, type TargetModes1 } from "./target-modes1.js";
import { a2PVerifiedSchema, type A2PVerified } from "./unions/a2-pverified.js";
import { agentSchema, type Agent } from "./unions/agent.js";
import { fallbackTargetSchema, type FallbackTarget } from "./unions/fallback-target.js";

/**
 * Response model for channel target operations. A channel target links a channel to an agent,
 * allowing users to communicate with the agent through that channel. For more information, see
 * [Console docs](https://docs.syllable.ai/Resources/Channels).
 */
export type ChannelTargetResponse = {
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
  /** The internal ID of the channel target */
  id: number;
  /** The name of the channel associated with the channel target */
  channelName: string;
  /** Timestamp of the most recent update to the channel target */
  updatedAt: Date;
  /** Email of the user who last updated the channel target */
  lastUpdatedBy: string;
  /** Definition of the agent with which the channel target is associated. */
  agent?: Agent;
  /**
   * Twilio US A2P messaging-path configuration snapshot from the last explicit verify; null if
   * never checked.
   */
  a2PVerified?: A2PVerified;
};

export const channelTargetResponseSchema: Schema<ChannelTargetResponse> = s.object<ChannelTargetResponse>({
  agentId: s.int(),
  channelId: s.int(),
  target: s.string(),
  targetMode: targetModes1Schema,
  fallbackTarget: s.optional(s.lazy(() => fallbackTargetSchema)),
  isTest: s.defaulted(s.boolean(), false),
  id: s.int(),
  channelName: s.string(),
  updatedAt: s.dateTime(),
  lastUpdatedBy: s.string(),
  agent: s.optional(s.lazy(() => agentSchema)),
  a2PVerified: s.optional(s.lazy(() => a2PVerifiedSchema)),
  _keysMap: {
    agentId: "agent_id",
    channelId: "channel_id",
    targetMode: "target_mode",
    fallbackTarget: "fallback_target",
    isTest: "is_test",
    channelName: "channel_name",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
    a2PVerified: "a2p_verified",
  },
});
