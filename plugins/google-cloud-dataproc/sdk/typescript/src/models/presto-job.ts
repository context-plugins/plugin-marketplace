import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";
import { queryList2Schema, type QueryList2 } from "./query-list2.js";

/**
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto
 * Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be
 * enabled when the cluster is created to submit a Presto job to the cluster.
 */
export type PrestoJob = {
  /**
   * Optional. A mapping of property names to values. Used to set Presto session properties
   * (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag
   * in the Presto CLI
   */
  properties?: Record<string, string>;
  /** A list of queries. */
  queryList?: QueryList2;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. Whether to continue executing queries if a query fails. The default value is false.
   * Setting to true can be useful when executing independent parallel queries.
   */
  continueOnFailure?: boolean;
  /** Optional. Presto client tags to attach to this query */
  clientTags?: string[];
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /**
   * Optional. The format in which query output will be displayed. See the Presto documentation for
   * supported output formats
   */
  outputFormat?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prestoJobSchema: Schema<PrestoJob> = s.object<PrestoJob>(
  {
    properties: s.optional(s.record(s.string(), s.string())),
    queryList: s.optional(s.lazy(() => queryList2Schema)),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    continueOnFailure: s.optional(s.boolean()),
    clientTags: s.optional(s.array(s.string())),
    queryFileUri: s.optional(s.string()),
    outputFormat: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
