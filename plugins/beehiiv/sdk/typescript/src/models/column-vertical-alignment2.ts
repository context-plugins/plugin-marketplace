import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The vertical alignment of the column content. */
export const ColumnVerticalAlignment2 = {
  Top: "top",
  Middle: "middle",
  Bottom: "bottom",
} as const;
export type ColumnVerticalAlignment2 =
  | (typeof ColumnVerticalAlignment2)[keyof typeof ColumnVerticalAlignment2]
  | (string & {});

export const columnVerticalAlignment2Schema: EnumSchema<ColumnVerticalAlignment2> =
  s.enumOf<ColumnVerticalAlignment2>(ColumnVerticalAlignment2);
