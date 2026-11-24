import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/** A Dataproc job for running Apache Flink applications on YARN. */
export type FlinkJob = {
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * The name of the driver's main class. The jar file that contains the class must be in the
   * default CLASSPATH or specified in jarFileUris.
   */
  mainClass?: string;
  /** The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
  /**
   * Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the
   * current job.
   */
  savepointUri?: string;
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. A mapping of property names to values, used to configure Flink. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/flink/conf/flink-defaults.conf and classes in user code.
   */
  properties?: Record<string, string>;
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that
   * can be set as job properties, since a collision might occur that causes an incorrect job
   * submission.
   */
  args?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flinkJobSchema: Schema<FlinkJob> = s.object<FlinkJob>(
  {
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    mainClass: s.optional(s.string()),
    mainJarFileUri: s.optional(s.string()),
    savepointUri: s.optional(s.string()),
    jarFileUris: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.string())),
    args: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
