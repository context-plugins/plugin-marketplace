import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NodeUpgradeState = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type NodeUpgradeState = (typeof NodeUpgradeState)[keyof typeof NodeUpgradeState] | (number & {});

export const nodeUpgradeStateSchema: EnumSchema<NodeUpgradeState> =
  s.enumOf<NodeUpgradeState>(NodeUpgradeState);
