import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";
import { queryList2Schema, type QueryList2 } from "./query-list2.js";

/** A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries. */
export type SparkSqlJob = {
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET
   * name="value";).
   */
  scriptVariables?: Record<string, string>;
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: string[];
  /**
   * Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf.
   * Properties that conflict with values set by the Dataproc API might be overwritten.
   */
  properties?: Record<string, string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /** A list of queries. */
  queryList?: QueryList2;
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkSqlJobSchema: Schema<SparkSqlJob> = s.object<SparkSqlJob>(
  {
    scriptVariables: s.optional(s.record(s.string(), s.string())),
    jarFileUris: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.string())),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    queryList: s.optional(s.lazy(() => queryList2Schema)),
    queryFileUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
