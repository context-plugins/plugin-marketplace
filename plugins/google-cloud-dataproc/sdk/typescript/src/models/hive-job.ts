import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queryList2Schema, type QueryList2 } from "./query-list2.js";

/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
export type HiveJob = {
  /** The HCFS URI of the script that contains Hive queries. */
  queryFileUri?: string;
  /** A list of queries. */
  queryList?: QueryList2;
  /**
   * Optional. Whether to continue executing queries if a query fails. The default value is false.
   * Setting to true can be useful when executing independent parallel queries.
   */
  continueOnFailure?: boolean;
  /**
   * Optional. A mapping of property names and values, used to configure Hive. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
   */
  properties?: Record<string, string>;
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Hive command: SET
   * name="value";).
   */
  scriptVariables?: Record<string, string>;
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop
   * MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
   */
  jarFileUris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hiveJobSchema: Schema<HiveJob> = s.object<HiveJob>(
  {
    queryFileUri: s.optional(s.string()),
    queryList: s.optional(s.lazy(() => queryList2Schema)),
    continueOnFailure: s.optional(s.boolean()),
    properties: s.optional(s.record(s.string(), s.string())),
    scriptVariables: s.optional(s.record(s.string(), s.string())),
    jarFileUris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
