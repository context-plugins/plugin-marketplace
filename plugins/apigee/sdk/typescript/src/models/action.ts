import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Action to be performed. */
export const Action = {
  ActionUnspecified: "ACTION_UNSPECIFIED",
  Upload: "UPLOAD",
  Delete: "DELETE",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
