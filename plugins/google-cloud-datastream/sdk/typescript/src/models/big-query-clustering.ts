import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** BigQuery clustering configuration. */
export type BigQueryClustering = {
  /** Required. Column names to set as clustering columns. */
  columns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bigQueryClusteringSchema: Schema<BigQueryClustering> = s.object<BigQueryClustering>(
  {
    columns: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
