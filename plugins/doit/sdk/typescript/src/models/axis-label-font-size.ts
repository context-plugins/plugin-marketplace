import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Font size used for axis labels on charts. */
export const AxisLabelFontSize = {
  Auto: "auto",
  Small: "small",
  Medium: "medium",
  Large: "large",
} as const;
export type AxisLabelFontSize = (typeof AxisLabelFontSize)[keyof typeof AxisLabelFontSize] | (string & {});

export const axisLabelFontSizeSchema: EnumSchema<AxisLabelFontSize> =
  s.enumOf<AxisLabelFontSize>(AxisLabelFontSize);
