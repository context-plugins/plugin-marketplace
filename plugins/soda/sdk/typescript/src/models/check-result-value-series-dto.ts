import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkResultValueSeriesDtoValueSeriesValueSchema,
  type CheckResultValueSeriesDtoValueSeriesValue,
} from "./check-result-value-series-dto-value-series-value.js";

export type CheckResultValueSeriesDto = {
  values?: CheckResultValueSeriesDtoValueSeriesValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultValueSeriesDtoSchema: Schema<CheckResultValueSeriesDto> =
  s.object<CheckResultValueSeriesDto>(
    {
      values: s.optional(s.array(s.lazy(() => checkResultValueSeriesDtoValueSeriesValueSchema))),
    },
    { additionalProperties: s.json() },
  );
