import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to use an existing Event Breaker Ruleset or create a new one inline. */
export const ExistingOrNew = {
  New: "new",
} as const;
export type ExistingOrNew = (typeof ExistingOrNew)[keyof typeof ExistingOrNew] | (string & {});

export const existingOrNewSchema: EnumSchema<ExistingOrNew> = s.enumOf<ExistingOrNew>(ExistingOrNew);
