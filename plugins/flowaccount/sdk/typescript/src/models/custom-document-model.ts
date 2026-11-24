import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = SwitchProductItemSellToBuy */
export const CustomDocumentModel = {
  _1: 1,
} as const;
export type CustomDocumentModel =
  | (typeof CustomDocumentModel)[keyof typeof CustomDocumentModel]
  | (number & {});

export const customDocumentModelSchema: EnumSchema<CustomDocumentModel> =
  s.enumOf<CustomDocumentModel>(CustomDocumentModel);
