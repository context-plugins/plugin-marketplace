import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExcludedAction1 = {
  UpdateOn: "updateOn",
  UpdateFallthrough: "updateFallthrough",
  UpdateOffVariation: "updateOffVariation",
  UpdateRules: "updateRules",
  UpdateTargets: "updateTargets",
  UpdatePrerequisites: "updatePrerequisites",
} as const;
export type ExcludedAction1 = (typeof ExcludedAction1)[keyof typeof ExcludedAction1] | (string & {});

export const excludedAction1Schema: EnumSchema<ExcludedAction1> = s.enumOf<ExcludedAction1>(ExcludedAction1);
