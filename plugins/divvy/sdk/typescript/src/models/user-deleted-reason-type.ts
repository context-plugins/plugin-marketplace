import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delete card reason */
export const UserDeletedReasonType = {
  Cancelled: "CANCELLED",
  Lost: "LOST",
  Stolen: "STOLEN",
  Misplaced: "MISPLACED",
} as const;
export type UserDeletedReasonType =
  | (typeof UserDeletedReasonType)[keyof typeof UserDeletedReasonType]
  | (string & {});

export const userDeletedReasonTypeSchema: EnumSchema<UserDeletedReasonType> =
  s.enumOf<UserDeletedReasonType>(UserDeletedReasonType);
