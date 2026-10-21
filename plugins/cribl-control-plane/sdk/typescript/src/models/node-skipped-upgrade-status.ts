import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NodeSkippedUpgradeStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type NodeSkippedUpgradeStatus =
  | (typeof NodeSkippedUpgradeStatus)[keyof typeof NodeSkippedUpgradeStatus]
  | (number & {});

export const nodeSkippedUpgradeStatusSchema: EnumSchema<NodeSkippedUpgradeStatus> =
  s.enumOf<NodeSkippedUpgradeStatus>(NodeSkippedUpgradeStatus);
