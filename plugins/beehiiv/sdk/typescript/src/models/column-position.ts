import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ColumnPosition = {
  Left: "left",
  Right: "right",
} as const;
export type ColumnPosition = (typeof ColumnPosition)[keyof typeof ColumnPosition] | (string & {});

export const columnPositionSchema: EnumSchema<ColumnPosition> = s.enumOf<ColumnPosition>(ColumnPosition);
