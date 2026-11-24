import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Action to perform with this rule. */
export const Action = {
  Create: "create",
  Update: "update",
  Select: "select",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
