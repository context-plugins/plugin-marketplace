import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistogramBinContentDto = {
  count: number;
  lowerBound: number;
  upperBound: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const histogramBinContentDtoSchema: Schema<HistogramBinContentDto> = s.object<HistogramBinContentDto>(
  {
    count: s.int(),
    lowerBound: s.float64(),
    upperBound: s.float64(),
  },
  { additionalProperties: s.json() },
);
