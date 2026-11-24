import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The workflow state that the Objective is in. */
export const StateShortcutObjectivesApi = {
  InProgress: "in progress",
  ToDo: "to do",
  Done: "done",
} as const;
export type StateShortcutObjectivesApi =
  | (typeof StateShortcutObjectivesApi)[keyof typeof StateShortcutObjectivesApi]
  | (string & {});

export const stateShortcutObjectivesApiSchema: EnumSchema<StateShortcutObjectivesApi> =
  s.enumOf<StateShortcutObjectivesApi>(StateShortcutObjectivesApi);
