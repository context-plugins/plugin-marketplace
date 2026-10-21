import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to use an existing event breaker ruleset or create a new one inline. */
export const ExistingOrNew2 = {
  Existing: "existing",
  New: "new",
} as const;
export type ExistingOrNew2 = (typeof ExistingOrNew2)[keyof typeof ExistingOrNew2] | (string & {});

export const existingOrNew2Schema: EnumSchema<ExistingOrNew2> = s.enumOf<ExistingOrNew2>(ExistingOrNew2);
