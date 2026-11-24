import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSchema, type Dataset } from "./dataset.js";

export type DatahubV1DatasetsResponse = {
  datasets?: Dataset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1DatasetsResponseSchema: Schema<DatahubV1DatasetsResponse> =
  s.object<DatahubV1DatasetsResponse>(
    {
      datasets: s.optional(s.array(s.lazy(() => datasetSchema))),
    },
    { additionalProperties: s.json() },
  );
