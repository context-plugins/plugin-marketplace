import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Secondary upgrade state when <code>state</code> is <code>FAILED</code>. */
export const NodeFailedUpgradeStatus2 = {
  _0: 0,
  _1: 1,
} as const;
export type NodeFailedUpgradeStatus2 =
  | (typeof NodeFailedUpgradeStatus2)[keyof typeof NodeFailedUpgradeStatus2]
  | (number & {});

export const nodeFailedUpgradeStatus2Schema: EnumSchema<NodeFailedUpgradeStatus2> =
  s.enumOf<NodeFailedUpgradeStatus2>(NodeFailedUpgradeStatus2);
