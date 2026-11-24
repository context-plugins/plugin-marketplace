import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TargetSelection = {
  Continuous: "CONTINUOUS",
  Snapshot: "SNAPSHOT",
} as const;
export type TargetSelection = (typeof TargetSelection)[keyof typeof TargetSelection] | (string & {});

export const targetSelectionSchema: EnumSchema<TargetSelection> = s.enumOf<TargetSelection>(TargetSelection);
