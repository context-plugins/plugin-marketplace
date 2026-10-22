import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of change to make to the removal date for this user from individual targeting for this
 * flag.
 */
export const Kind17 = {
  AddExpireUserTargetDate: "addExpireUserTargetDate",
  UpdateExpireUserTargetDate: "updateExpireUserTargetDate",
  RemoveExpireUserTargetDate: "removeExpireUserTargetDate",
} as const;
export type Kind17 = (typeof Kind17)[keyof typeof Kind17] | (string & {});

export const kind17Schema: EnumSchema<Kind17> = s.enumOf<Kind17>(Kind17);
