import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A configuration for running an Apache Spark (https://spark.apache.org/) batch workload. */
export type SparkBatch = {
  /** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: string[];
  /**
   * Optional. The name of the driver main class. The jar file that contains the class must be in
   * the classpath or specified in jar_file_uris.
   */
  mainClass?: string;
  /** Optional. The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments that can be set as
   * batch properties, such as --conf, since a collision can occur that causes an incorrect batch
   * submission.
   */
  args?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkBatchSchema: Schema<SparkBatch> = s.object<SparkBatch>(
  {
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    fileUris: s.optional(s.array(s.string())),
    mainClass: s.optional(s.string()),
    mainJarFileUri: s.optional(s.string()),
    args: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
