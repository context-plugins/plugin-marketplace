import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/** A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN. */
export type SparkJob = {
  /**
   * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for
   * naively parallel tasks.
   */
  fileUris?: string[];
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /**
   * The name of the driver's main class. The jar file that contains the class must be in the
   * default CLASSPATH or specified in SparkJob.jar_file_uris.
   */
  mainClass?: string;
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that
   * can be set as job properties, since a collision may occur that causes an incorrect job
   * submission.
   */
  args?: string[];
  /** The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. A mapping of property names to values, used to configure Spark. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/spark/conf/spark-defaults.conf and classes in user code.
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkJobSchema: Schema<SparkJob> = s.object<SparkJob>(
  {
    fileUris: s.optional(s.array(s.string())),
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    mainClass: s.optional(s.string()),
    args: s.optional(s.array(s.string())),
    mainJarFileUri: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
