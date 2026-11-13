import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The workflow state that the Objective is in. */
export const State2 = {
  InProgress: "in progress",
  ToDo: "to do",
  Done: "done",
} as const;
export type State2 = (typeof State2)[keyof typeof State2] | (string & {});

export const state2Schema: EnumSchema<State2> = s.enumOf<State2>(State2);
