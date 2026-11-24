import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies if the resource collection in the request is added or deleted to the resource
 * collection.
 */
export const Action = {
  Add: "ADD",
  Remove: "REMOVE",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
