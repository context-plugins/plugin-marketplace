import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExcludedAction = {
  UpdateOn: "updateOn",
  UpdateRules: "updateRules",
  UpdateFallthrough: "updateFallthrough",
  UpdateOffVariation: "updateOffVariation",
  UpdatePrerequisites: "updatePrerequisites",
  UpdateTargets: "updateTargets",
  UpdateFlagConfigMigrationSettings: "updateFlagConfigMigrationSettings",
} as const;
export type ExcludedAction = (typeof ExcludedAction)[keyof typeof ExcludedAction] | (string & {});

export const excludedActionSchema: EnumSchema<ExcludedAction> = s.enumOf<ExcludedAction>(ExcludedAction);
