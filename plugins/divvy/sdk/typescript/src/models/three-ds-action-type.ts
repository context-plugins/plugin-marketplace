import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the action type for 3D Secure (3DS) transactions. */
export const ThreeDsActionType = {
  Accept: "ACCEPT",
  Reject: "REJECT",
} as const;
export type ThreeDsActionType = (typeof ThreeDsActionType)[keyof typeof ThreeDsActionType] | (string & {});

export const threeDsActionTypeSchema: EnumSchema<ThreeDsActionType> =
  s.enumOf<ThreeDsActionType>(ThreeDsActionType);
