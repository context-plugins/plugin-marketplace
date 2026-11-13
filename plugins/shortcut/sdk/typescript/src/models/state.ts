import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when `epic_state_id`
 * is set.
 */
export const State = {
  InProgress: "in progress",
  ToDo: "to do",
  Done: "done",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
