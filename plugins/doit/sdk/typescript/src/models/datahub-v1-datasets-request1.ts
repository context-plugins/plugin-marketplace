import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1DatasetsRequest1 = {
  /** List of dataset names to delete. */
  datasets: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1DatasetsRequest1Schema: Schema<DatahubV1DatasetsRequest1> =
  s.object<DatahubV1DatasetsRequest1>(
    {
      datasets: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
