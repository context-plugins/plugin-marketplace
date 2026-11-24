import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A configuration for running an Apache PySpark
 * (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
 */
export type PySparkBatch = {
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: string[];
  /** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /**
   * Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.
   */
  mainPythonFileUri?: string;
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments that can be set as
   * batch properties, such as --conf, since a collision can occur that causes an incorrect batch
   * submission.
   */
  args?: string[];
  /**
   * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file
   * types: .py, .egg, and .zip.
   */
  pythonFileUris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pySparkBatchSchema: Schema<PySparkBatch> = s.object<PySparkBatch>(
  {
    fileUris: s.optional(s.array(s.string())),
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    mainPythonFileUri: s.optional(s.string()),
    args: s.optional(s.array(s.string())),
    pythonFileUris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
