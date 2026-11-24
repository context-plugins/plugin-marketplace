import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action that changed this resource. */
export const Action = {
  ActionTypeUnspecified: "ACTION_TYPE_UNSPECIFIED",
  Created: "CREATED",
  Updated: "UPDATED",
  Deleted: "DELETED",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
