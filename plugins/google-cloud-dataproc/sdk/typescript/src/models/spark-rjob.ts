import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/**
 * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html)
 * applications on YARN.
 */
export type SparkRJob = {
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that
   * can be set as job properties, since a collision may occur that causes an incorrect job
   * submission.
   */
  args?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /**
   * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for
   * naively parallel tasks.
   */
  fileUris?: string[];
  /** Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
  mainRFileUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. A mapping of property names to values, used to configure SparkR. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/spark/conf/spark-defaults.conf and classes in user code.
   */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkRJobSchema: Schema<SparkRJob> = s.object<SparkRJob>(
  {
    args: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    fileUris: s.optional(s.array(s.string())),
    mainRFileUri: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
