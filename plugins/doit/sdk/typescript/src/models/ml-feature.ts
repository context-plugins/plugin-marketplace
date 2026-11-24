import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MlFeature = {
  Increasing: "increasing",
  Decreasing: "decreasing",
  None: "none",
  Forecast: "forecast",
} as const;
export type MlFeature = (typeof MlFeature)[keyof typeof MlFeature] | (string & {});

export const mlFeatureSchema: EnumSchema<MlFeature> = s.enumOf<MlFeature>(MlFeature);
