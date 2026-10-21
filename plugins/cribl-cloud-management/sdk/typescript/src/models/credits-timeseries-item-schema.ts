import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditsTimeseriesDimensionSchemaSchema,
  type CreditsTimeseriesDimensionSchema,
} from "./credits-timeseries-dimension-schema.js";

export type CreditsTimeseriesItemSchema = {
  /** Date of the aggregation window in ISO 8601 format. */
  date: Date;
  /** Total credits consumed in the aggregation window. */
  credits: number;
  /** Credit breakdown by dimension. */
  dimensions: CreditsTimeseriesDimensionSchema[];
};

export const creditsTimeseriesItemSchemaSchema: Schema<CreditsTimeseriesItemSchema> =
  s.object<CreditsTimeseriesItemSchema>({
    date: s.dateTime(),
    credits: s.float64(),
    dimensions: s.array(s.lazy(() => creditsTimeseriesDimensionSchemaSchema)),
  });
