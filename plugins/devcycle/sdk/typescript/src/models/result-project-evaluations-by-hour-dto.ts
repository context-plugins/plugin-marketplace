import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultsWithProjectDataSchema, type ResultsWithProjectData } from "./results-with-project-data.js";

export type ResultProjectEvaluationsByHourDto = {
  result: ResultsWithProjectData;
  /** Whether this result came from a cache or a live result */
  cached: boolean;
  /** Date which these results are up-to-date with */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultProjectEvaluationsByHourDtoSchema: Schema<ResultProjectEvaluationsByHourDto> =
  s.object<ResultProjectEvaluationsByHourDto>(
    {
      result: resultsWithProjectDataSchema,
      cached: s.boolean(),
      updatedAt: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
