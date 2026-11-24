import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch
 * workload.
 */
export type SparkSqlBatch = {
  /** Required. The HCFS URI of the script that contains Spark SQL queries to execute. */
  queryFileUri?: string;
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: string[];
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET
   * name="value";).
   */
  queryVariables?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkSqlBatchSchema: Schema<SparkSqlBatch> = s.object<SparkSqlBatch>(
  {
    queryFileUri: s.optional(s.string()),
    jarFileUris: s.optional(s.array(s.string())),
    queryVariables: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
