import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LineType = {
  Comment: "Comment",
  Account: "Account",
  Item: "Item",
  FixedAsset: "Fixed Asset",
  Charge: "Charge",
} as const;
export type LineType = (typeof LineType)[keyof typeof LineType] | (string & {});

export const lineTypeSchema: EnumSchema<LineType> = s.enumOf<LineType>(LineType);
