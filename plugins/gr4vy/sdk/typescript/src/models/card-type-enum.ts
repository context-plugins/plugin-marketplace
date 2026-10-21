import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardTypeEnum = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
} as const;
export type CardTypeEnum = (typeof CardTypeEnum)[keyof typeof CardTypeEnum] | (string & {});

export const cardTypeEnumSchema: EnumSchema<CardTypeEnum> = s.enumOf<CardTypeEnum>(CardTypeEnum);
