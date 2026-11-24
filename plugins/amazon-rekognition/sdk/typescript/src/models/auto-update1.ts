import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether automatic retraining will be attempted for the versions of the project. Applies
 * only to adapters.
 */
export const AutoUpdate1 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type AutoUpdate1 = (typeof AutoUpdate1)[keyof typeof AutoUpdate1] | (string & {});

export const autoUpdate1Schema: EnumSchema<AutoUpdate1> = s.enumOf<AutoUpdate1>(AutoUpdate1);
