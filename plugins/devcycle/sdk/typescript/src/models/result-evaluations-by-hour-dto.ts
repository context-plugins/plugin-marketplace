import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultWithFeatureDataSchema, type ResultWithFeatureData } from "./result-with-feature-data.js";

export type ResultEvaluationsByHourDto = {
  result: ResultWithFeatureData;
  /** Whether this result came from a cache or a live result */
  cached: boolean;
  /** Date which these results are up-to-date with */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultEvaluationsByHourDtoSchema: Schema<ResultEvaluationsByHourDto> =
  s.object<ResultEvaluationsByHourDto>(
    {
      result: resultWithFeatureDataSchema,
      cached: s.boolean(),
      updatedAt: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
