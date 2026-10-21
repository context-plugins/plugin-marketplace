import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NodeActiveUpgradeStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type NodeActiveUpgradeStatus =
  | (typeof NodeActiveUpgradeStatus)[keyof typeof NodeActiveUpgradeStatus]
  | (number & {});

export const nodeActiveUpgradeStatusSchema: EnumSchema<NodeActiveUpgradeStatus> =
  s.enumOf<NodeActiveUpgradeStatus>(NodeActiveUpgradeStatus);
