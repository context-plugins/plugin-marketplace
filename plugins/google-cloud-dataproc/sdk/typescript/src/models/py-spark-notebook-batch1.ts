import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. PySpark notebook batch config. */
export type PySparkNotebookBatch1 = {
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor */
  fileUris?: string[];
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: string[];
  /**
   * Optional. HCFS URIs of archives to be extracted into the working directory of each executor.
   * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris?: string[];
  /** Required. The HCFS URI of the notebook file to execute. */
  notebookFileUri?: string;
  /** Optional. HCFS URIs of Python files to pass to the PySpark framework. */
  pythonFileUris?: string[];
  /** Optional. The parameters to pass to the notebook. */
  params?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pySparkNotebookBatch1Schema: Schema<PySparkNotebookBatch1> = s.object<PySparkNotebookBatch1>(
  {
    fileUris: s.optional(s.array(s.string())),
    jarFileUris: s.optional(s.array(s.string())),
    archiveUris: s.optional(s.array(s.string())),
    notebookFileUri: s.optional(s.string()),
    pythonFileUris: s.optional(s.array(s.string())),
    params: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
