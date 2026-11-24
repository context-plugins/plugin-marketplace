import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const State13 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type State13 = (typeof State13)[keyof typeof State13] | (string & {});

export const state13Schema: EnumSchema<State13> = s.enumOf<State13>(State13);
