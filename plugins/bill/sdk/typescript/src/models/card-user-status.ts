import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card user status */
export const CardUserStatus = {
  Verified: "VERIFIED",
  Nominated: "NOMINATED",
} as const;
export type CardUserStatus = (typeof CardUserStatus)[keyof typeof CardUserStatus] | (string & {});

export const cardUserStatusSchema: EnumSchema<CardUserStatus> = s.enumOf<CardUserStatus>(CardUserStatus);
