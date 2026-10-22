import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludedAction = {
  UpdateOn: "updateOn",
  UpdateRules: "updateRules",
  UpdateFallthrough: "updateFallthrough",
  UpdateOffVariation: "updateOffVariation",
  UpdatePrerequisites: "updatePrerequisites",
  UpdateTargets: "updateTargets",
  UpdateFlagConfigMigrationSettings: "updateFlagConfigMigrationSettings",
} as const;
export type IncludedAction = (typeof IncludedAction)[keyof typeof IncludedAction] | (string & {});

export const includedActionSchema: EnumSchema<IncludedAction> = s.enumOf<IncludedAction>(IncludedAction);
