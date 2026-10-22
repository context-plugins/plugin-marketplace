import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NodeFailedUpgradeStatus = {
  _0: 0,
  _1: 1,
} as const;
export type NodeFailedUpgradeStatus =
  | (typeof NodeFailedUpgradeStatus)[keyof typeof NodeFailedUpgradeStatus]
  | (number & {});

export const nodeFailedUpgradeStatusSchema: EnumSchema<NodeFailedUpgradeStatus> =
  s.enumOf<NodeFailedUpgradeStatus>(NodeFailedUpgradeStatus);
