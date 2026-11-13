import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CellFormat = {
  Normal: "normal",
  Typed: "typed",
} as const;
export type CellFormat = (typeof CellFormat)[keyof typeof CellFormat] | (string & {});

export const cellFormatSchema: EnumSchema<CellFormat> = s.enumOf<CellFormat>(CellFormat);
