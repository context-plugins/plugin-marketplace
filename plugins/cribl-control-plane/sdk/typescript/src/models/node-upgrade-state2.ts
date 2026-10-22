import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current upgrade state for the Edge Node. */
export const NodeUpgradeState2 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type NodeUpgradeState2 = (typeof NodeUpgradeState2)[keyof typeof NodeUpgradeState2] | (number & {});

export const nodeUpgradeState2Schema: EnumSchema<NodeUpgradeState2> =
  s.enumOf<NodeUpgradeState2>(NodeUpgradeState2);
