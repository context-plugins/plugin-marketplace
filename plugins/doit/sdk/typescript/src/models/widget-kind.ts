import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines which property is populated in the widget's `result`. */
export const WidgetKind = {
  MonetaryMetric: "monetary_metric",
} as const;
export type WidgetKind = (typeof WidgetKind)[keyof typeof WidgetKind] | (string & {});

export const widgetKindSchema: EnumSchema<WidgetKind> = s.enumOf<WidgetKind>(WidgetKind);
