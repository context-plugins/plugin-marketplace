import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";
import { queryList2Schema, type QueryList2 } from "./query-list2.js";

/** Optional. Job is a Pig job. */
export type PigJob2 = {
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Pig command:
   * name=[value]).
   */
  scriptVariables?: Record<string, string>;
  /** A list of queries. */
  queryList?: QueryList2;
  /** The HCFS URI of the script that contains the Pig queries. */
  queryFileUri?: string;
  /**
   * Optional. A mapping of property names to values, used to configure Pig. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
   */
  properties?: Record<string, string>;
  /**
   * Optional. Whether to continue executing queries if a query fails. The default value is false.
   * Setting to true can be useful when executing independent parallel queries.
   */
  continueOnFailure?: boolean;
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce
   * (MR) tasks. Can contain Pig UDFs.
   */
  jarFileUris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pigJob2Schema: Schema<PigJob2> = s.object<PigJob2>(
  {
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    scriptVariables: s.optional(s.record(s.string(), s.string())),
    queryList: s.optional(s.lazy(() => queryList2Schema)),
    queryFileUri: s.optional(s.string()),
    properties: s.optional(s.record(s.string(), s.string())),
    continueOnFailure: s.optional(s.boolean()),
    jarFileUris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
