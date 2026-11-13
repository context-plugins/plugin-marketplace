import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user state, one of partial, full, disabled, or imported. A partial user is disabled, has no
 * means to log in, and is not an import user. A full user is enabled and has a means to log in. A
 * disabled user is disabled and has a means to log in. An import user is disabled, has no means to
 * log in, and is marked as an import user.
 */
export const State3 = {
  Partial: "partial",
  Full: "full",
  Disabled: "disabled",
  Imported: "imported",
} as const;
export type State3 = (typeof State3)[keyof typeof State3] | (string & {});

export const state3Schema: EnumSchema<State3> = s.enumOf<State3>(State3);
