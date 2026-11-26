import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Void type enum. */
export const VoidType = {
  VoidAndCredit: "VOID_AND_CREDIT",
  VoidAndReissue: "VOID_AND_REISSUE",
  VoidOnly: "VOID_ONLY",
  VoidAndReissueVcard: "VOID_AND_REISSUE_VCARD",
} as const;
export type VoidType = (typeof VoidType)[keyof typeof VoidType] | (string & {});

export const voidTypeSchema: EnumSchema<VoidType> = s.enumOf<VoidType>(VoidType);
