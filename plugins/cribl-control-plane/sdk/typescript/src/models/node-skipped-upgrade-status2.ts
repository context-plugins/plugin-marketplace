import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Secondary upgrade state when <code>state</code> is <code>SKIPPED</code>. */
export const NodeSkippedUpgradeStatus2 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type NodeSkippedUpgradeStatus2 =
  | (typeof NodeSkippedUpgradeStatus2)[keyof typeof NodeSkippedUpgradeStatus2]
  | (number & {});

export const nodeSkippedUpgradeStatus2Schema: EnumSchema<NodeSkippedUpgradeStatus2> =
  s.enumOf<NodeSkippedUpgradeStatus2>(NodeSkippedUpgradeStatus2);
