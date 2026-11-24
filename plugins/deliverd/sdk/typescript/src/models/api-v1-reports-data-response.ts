import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSchema, type Dataset } from "./dataset.js";

export type ApiV1ReportsDataResponse = {
  datasets: Dataset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsDataResponseSchema: Schema<ApiV1ReportsDataResponse> =
  s.object<ApiV1ReportsDataResponse>(
    {
      datasets: s.array(s.lazy(() => datasetSchema)),
    },
    { additionalProperties: s.json() },
  );
