import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The workflow state that the Milestone is in. */
export const StateShortcutMilestonesApi = {
  InProgress: "in progress",
  ToDo: "to do",
  Done: "done",
} as const;
export type StateShortcutMilestonesApi =
  | (typeof StateShortcutMilestonesApi)[keyof typeof StateShortcutMilestonesApi]
  | (string & {});

export const stateShortcutMilestonesApiSchema: EnumSchema<StateShortcutMilestonesApi> =
  s.enumOf<StateShortcutMilestonesApi>(StateShortcutMilestonesApi);
