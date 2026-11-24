import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action of the entity referenced. */
export const Action = {
  Open: "open",
  Update: "update",
  Reopen: "reopen",
  Close: "close",
  Sync: "sync",
  Comment: "comment",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
