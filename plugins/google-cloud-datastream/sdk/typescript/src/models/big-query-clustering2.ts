import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** BigQuery clustering rule. */
export type BigQueryClustering2 = {
  /** Required. Column names to set as clustering columns. */
  columns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bigQueryClustering2Schema: Schema<BigQueryClustering2> = s.object<BigQueryClustering2>(
  {
    columns: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
