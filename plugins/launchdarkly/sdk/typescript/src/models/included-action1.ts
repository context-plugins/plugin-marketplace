import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludedAction1 = {
  UpdateOn: "updateOn",
  UpdateFallthrough: "updateFallthrough",
  UpdateOffVariation: "updateOffVariation",
  UpdateRules: "updateRules",
  UpdateTargets: "updateTargets",
  UpdatePrerequisites: "updatePrerequisites",
} as const;
export type IncludedAction1 = (typeof IncludedAction1)[keyof typeof IncludedAction1] | (string & {});

export const includedAction1Schema: EnumSchema<IncludedAction1> = s.enumOf<IncludedAction1>(IncludedAction1);
