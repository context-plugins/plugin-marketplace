import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The column position. This field is deprecated but supported for existing column layouts. */
export const ColumnPosition1 = {
  Left: "left",
  Right: "right",
} as const;
export type ColumnPosition1 = (typeof ColumnPosition1)[keyof typeof ColumnPosition1] | (string & {});

export const columnPosition1Schema: EnumSchema<ColumnPosition1> = s.enumOf<ColumnPosition1>(ColumnPosition1);
