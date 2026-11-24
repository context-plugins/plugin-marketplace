import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Font size used for data labels on charts. */
export const DataLabelFontSize = {
  Auto: "auto",
  Small: "small",
  Medium: "medium",
  Large: "large",
} as const;
export type DataLabelFontSize = (typeof DataLabelFontSize)[keyof typeof DataLabelFontSize] | (string & {});

export const dataLabelFontSizeSchema: EnumSchema<DataLabelFontSize> =
  s.enumOf<DataLabelFontSize>(DataLabelFontSize);
