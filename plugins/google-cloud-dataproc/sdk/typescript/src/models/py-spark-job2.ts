import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/** Optional. Job is a PySpark job. */
export type PySparkJob2 = {
  /**
   * Optional. A mapping of property names to values, used to configure PySpark. Properties that
   * conflict with values set by the Dataproc API might be overwritten. Can include properties set
   * in /etc/spark/conf/spark-defaults.conf and classes in user code.
   */
  properties?: Record<string, string>;
  /** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
  mainPythonFileUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig1;
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that
   * can be set as job properties, since a collision may occur that causes an incorrect job
   * submission.
   */
  args?: string[];
  /**
   * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for
   * naively parallel tasks.
   */
  fileUris?: string[];
  /**
   * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file
   * types: .py, .egg, and .zip.
   */
  pythonFileUris?: string[];
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.Note: Spark applications must be
   * deployed in cluster mode (https://spark.apache.org/docs/latest/cluster-overview.html) for
   * correct environment propagation.
   */
  archiveUris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pySparkJob2Schema: Schema<PySparkJob2> = s.object<PySparkJob2>(
  {
    properties: s.optional(s.record(s.string(), s.string())),
    mainPythonFileUri: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    args: s.optional(s.array(s.string())),
    fileUris: s.optional(s.array(s.string())),
    pythonFileUris: s.optional(s.array(s.string())),
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
