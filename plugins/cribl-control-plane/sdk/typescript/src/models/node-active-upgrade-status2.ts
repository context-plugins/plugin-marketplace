import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Secondary upgrade state when <code>state</code> is <code>ACTIVE</code>. */
export const NodeActiveUpgradeStatus2 = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type NodeActiveUpgradeStatus2 =
  | (typeof NodeActiveUpgradeStatus2)[keyof typeof NodeActiveUpgradeStatus2]
  | (number & {});

export const nodeActiveUpgradeStatus2Schema: EnumSchema<NodeActiveUpgradeStatus2> =
  s.enumOf<NodeActiveUpgradeStatus2>(NodeActiveUpgradeStatus2);
