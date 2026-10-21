import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { targetModes3Schema, type TargetModes3 } from "./target-modes3.js";

/**
 * The channel target an experiment splits, resolved for display.
 *
 * Enough to name the target on the experiment card without a second read: the Console shows the
 * target itself and the channel it belongs to, and links to neither by ID.
 */
export type DaoExperimentTargetSummary = {
  /** The internal ID of the channel target */
  id: number;
  /** The target itself, such as a phone number */
  target: string;
  /** The mode of the channel target */
  targetMode: TargetModes3;
  /** The channel the target belongs to */
  channelId: number;
  /** The name of that channel */
  channelName: string;
};

export const daoExperimentTargetSummarySchema: Schema<DaoExperimentTargetSummary> =
  s.object<DaoExperimentTargetSummary>({
    id: s.int(),
    target: s.string(),
    targetMode: targetModes3Schema,
    channelId: s.int(),
    channelName: s.string(),
    _keysMap: {
      targetMode: "target_mode",
      channelId: "channel_id",
      channelName: "channel_name",
    },
  });
