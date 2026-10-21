import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localOverridesSchema, type LocalOverrides } from "./local-overrides.js";

export type DetectionRules = {
  /**
   * Instance-level tuning applied after the rule set is merged. Managed by Cribl Security; not
   * intended for direct editing.
   */
  localOverrides?: LocalOverrides;
};

export const detectionRulesSchema: Schema<DetectionRules> = s.object<DetectionRules>({
  localOverrides: s.optional(s.lazy(() => localOverridesSchema)),
});
