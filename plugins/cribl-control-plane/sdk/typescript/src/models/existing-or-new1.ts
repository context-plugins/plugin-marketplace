import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to use an existing Event Breaker Ruleset or create a new one inline. */
export const ExistingOrNew1 = {
  Existing: "existing",
} as const;
export type ExistingOrNew1 = (typeof ExistingOrNew1)[keyof typeof ExistingOrNew1] | (string & {});

export const existingOrNew1Schema: EnumSchema<ExistingOrNew1> = s.enumOf<ExistingOrNew1>(ExistingOrNew1);
