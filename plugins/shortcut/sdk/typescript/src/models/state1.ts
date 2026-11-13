import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The workflow state that the Milestone is in. */
export const State1 = {
  InProgress: "in progress",
  ToDo: "to do",
  Done: "done",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);
