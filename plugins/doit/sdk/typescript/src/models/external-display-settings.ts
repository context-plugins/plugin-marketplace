import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { axisLabelFontSizeSchema, type AxisLabelFontSize } from "./axis-label-font-size.js";
import { dataLabelFontSizeSchema, type DataLabelFontSize } from "./data-label-font-size.js";
import { numberScaleSchema, type NumberScale } from "./number-scale.js";

/** Display settings for the report. */
export type ExternalDisplaySettings = {
  /**
   * Identifier of the theme applied to the report. The reserved sentinel `"default"` is returned on
   * GET when no theme is stored and clears the stored value on PATCH. Omit the field on PATCH to
   * leave the stored value unchanged.
   *
   * @default "default"
   */
  themeId?: string;
  /** Font size used for data labels on charts. */
  dataLabelFontSize?: DataLabelFontSize;
  /** Font size used for axis labels on charts. */
  axisLabelFontSize?: AxisLabelFontSize;
  /** Scale applied to numeric values when rendering the report. */
  numberScale?: NumberScale;
  /** Number of decimal places shown for numeric values. */
  decimalPrecision?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const externalDisplaySettingsProperties: s.Shape<ExternalDisplaySettings> = {
  themeId: s.defaulted(s.string(), "default"),
  dataLabelFontSize: s.optional(s.lazy(() => dataLabelFontSizeSchema)),
  axisLabelFontSize: s.optional(s.lazy(() => axisLabelFontSizeSchema)),
  numberScale: s.optional(s.lazy(() => numberScaleSchema)),
  decimalPrecision: s.optional(s.int()),
};

export const externalDisplaySettingsInternalSchema: Schema<ExternalDisplaySettings> =
  s.object<ExternalDisplaySettings>(externalDisplaySettingsProperties, { additionalProperties: s.json() });

export const externalDisplaySettingsSchema: Schema<ExternalDisplaySettings> = s.lazySchema(() =>
  s.object<ExternalDisplaySettings>(
    {
      ...externalDisplaySettingsProperties,
      decimalPrecision: s.optional(s.int().check(s.gte(0), s.lte(8))),
    },
    { additionalProperties: s.json() },
  ),
);
