import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";
import { queryList2Schema, type QueryList2 } from "./query-list2.js";

/** Optional. Job is a Trino job. */
export type TrinoJob2 = {
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /**
   * Optional. Whether to continue executing queries if a query fails. The default value is false.
   * Setting to true can be useful when executing independent parallel queries.
   */
  continueOnFailure?: boolean;
  /**
   * Optional. The format in which query output will be displayed. See the Trino documentation for
   * supported output formats
   */
  outputFormat?: string;
  /** Optional. Trino client tags to attach to this query */
  clientTags?: string[];
  /** A list of queries. */
  queryList?: QueryList2;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. A mapping of property names to values. Used to set Trino session properties
   * (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in
   * the Trino CLI
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trinoJob2Schema: Schema<TrinoJob2> = s.object<TrinoJob2>(
  {
    queryFileUri: s.optional(s.string()),
    continueOnFailure: s.optional(s.boolean()),
    outputFormat: s.optional(s.string()),
    clientTags: s.optional(s.array(s.string())),
    queryList: s.optional(s.lazy(() => queryList2Schema)),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
