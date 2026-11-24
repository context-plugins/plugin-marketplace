import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** archive or edit_tags */
export const Action = {
  Archive: "archive",
  EditTags: "edit_tags",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
