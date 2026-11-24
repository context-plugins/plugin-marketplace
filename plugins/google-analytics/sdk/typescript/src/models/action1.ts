import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Action1 = {
  ActionTypeUnspecified: "ACTION_TYPE_UNSPECIFIED",
  Created: "CREATED",
  Updated: "UPDATED",
  Deleted: "DELETED",
} as const;
export type Action1 = (typeof Action1)[keyof typeof Action1] | (string & {});

export const action1Schema: EnumSchema<Action1> = s.enumOf<Action1>(Action1);
