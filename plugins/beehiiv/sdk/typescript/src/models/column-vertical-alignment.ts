import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ColumnVerticalAlignment = {
  Top: "top",
  Middle: "middle",
  Bottom: "bottom",
} as const;
export type ColumnVerticalAlignment =
  | (typeof ColumnVerticalAlignment)[keyof typeof ColumnVerticalAlignment]
  | (string & {});

export const columnVerticalAlignmentSchema: EnumSchema<ColumnVerticalAlignment> =
  s.enumOf<ColumnVerticalAlignment>(ColumnVerticalAlignment);
