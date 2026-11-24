import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. SparkR batch config. */
export type SparkRBatch2 = {
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /** Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file. */
  mainRFileUri?: string;
  /**
   * Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set
   * as batch properties, such as --conf, since a collision can occur that causes an incorrect batch
   * submission.
   */
  args?: string[];
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkRBatch2Schema: Schema<SparkRBatch2> = s.object<SparkRBatch2>(
  {
    archiveUris: s.optional(s.array(s.string())),
    mainRFileUri: s.optional(s.string()),
    args: s.optional(s.array(s.string())),
    fileUris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
