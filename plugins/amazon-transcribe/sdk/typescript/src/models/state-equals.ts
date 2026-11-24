import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only custom medical vocabularies with the specified state. Custom vocabularies are
 * ordered by creation date, with the newest vocabulary first. If you do not include StateEquals,
 * all custom medical vocabularies are returned.
 */
export const StateEquals = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type StateEquals = (typeof StateEquals)[keyof typeof StateEquals] | (string & {});

export const stateEqualsSchema: EnumSchema<StateEquals> = s.enumOf<StateEquals>(StateEquals);
