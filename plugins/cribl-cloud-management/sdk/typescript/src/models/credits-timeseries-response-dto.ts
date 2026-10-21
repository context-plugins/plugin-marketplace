import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditsTimeseriesItemSchemaSchema,
  type CreditsTimeseriesItemSchema,
} from "./credits-timeseries-item-schema.js";

export type CreditsTimeseriesResponseDto = {
  /** Credit timeseries data points. */
  items: CreditsTimeseriesItemSchema[];
  /** Total number of items in the response. */
  count: number;
};

export const creditsTimeseriesResponseDtoSchema: Schema<CreditsTimeseriesResponseDto> =
  s.object<CreditsTimeseriesResponseDto>({
    items: s.array(s.lazy(() => creditsTimeseriesItemSchemaSchema)),
    count: s.int(),
  });
