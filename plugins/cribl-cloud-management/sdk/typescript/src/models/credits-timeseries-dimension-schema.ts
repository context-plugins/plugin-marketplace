import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditsTimeseriesDimensionSchema = {
  /** Dimension label for the credit breakdown. */
  dimension: string;
  /** Number of credits attributed to the dimension. */
  credits: number;
};

export const creditsTimeseriesDimensionSchemaSchema: Schema<CreditsTimeseriesDimensionSchema> =
  s.object<CreditsTimeseriesDimensionSchema>({
    dimension: s.string(),
    credits: s.float64(),
  });
