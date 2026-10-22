import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localOverridesSchema, type LocalOverrides } from "./local-overrides.js";

/** Configuration specific to the Pipeline Function. */
export type DetectionRules1 = {
  /**
   * Instance-level tuning applied after the rule set is merged. Managed by Cribl Security; not
   * intended for direct editing.
   */
  localOverrides?: LocalOverrides;
};

export const detectionRules1Schema: Schema<DetectionRules1> = s.object<DetectionRules1>({
  localOverrides: s.optional(s.lazy(() => localOverridesSchema)),
});
