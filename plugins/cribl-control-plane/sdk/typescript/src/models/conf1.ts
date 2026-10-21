import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod3Schema, type AuthenticationMethod3 } from "./authentication-method3.js";
import { pathExtractor2Schema, type PathExtractor2 } from "./path-extractor2.js";

/** Collector configuration */
export type Conf1 = {
  /** Name of the predefined Destination that will be used to auto-populate Collector settings */
  outputName?: string;
  /**
   * Name of the bucket to collect from. This value can be a constant or a JavaScript expression
   * that can only be evaluated at init time. Example referencing a Global Variable:
   * `myBucket-${C.vars.myVar}`.
   */
  bucket: string;
  /**
   * The directory from which to collect data. Templating is supported, such as
   * myDir/${datacenter}/${host}/${app}/. Time-based tokens are also supported, such as
   * myOtherDir/${_time:%Y}/${_time:%m}/${_time:%d}/.
   */
  path?: string;
  /**
   * Allows using template tokens as context for expressions that enrich discovery results. For
   * example, given a template /path/${epoch}, an extractor under key "epoch" with an expression
   * {date: new Date(+value*1000)}, will enrich discovery results with a human readable "date"
   * field.
   */
  extractors?: PathExtractor2[];
  /**
   * Google Cloud Storage service endpoint. If empty, the endpoint will default to
   * https://storage.googleapis.com.
   */
  endpoint?: string;
  /** Used to disable Collector event time filtering when a date range is specified */
  disableTimeFilter?: boolean;
  /** Recurse through subdirectories */
  recurse?: boolean;
  /** Maximum number of metadata objects to batch before recording as results */
  maxBatchSize?: number;
  /**
   * Enter account credentials manually, select a secret that references your credentials, or use
   * Google Application Default Credentials
   */
  authType?: AuthenticationMethod3;
  /** Maximum file size for each Parquet chunk */
  parquetChunkSizeMb?: number;
  /**
   * The maximum time allowed for downloading a Parquet chunk. Processing will abort if a chunk
   * cannot be downloaded within the time specified.
   */
  parquetChunkDownloadTimeout?: number;
  /**
   * Contents of Google Cloud service account credentials (JSON keys) file. To upload a file, click
   * the upload button at this field's upper right.
   */
  serviceAccountCredentials: string;
  /** Select or create a stored text secret that references your credentials */
  textSecret: string;
  /**
   * Binds 'bucket' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'bucket' at runtime.
   */
  templateBucket?: string;
  /**
   * Binds 'path' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'path' at runtime.
   */
  templatePath?: string;
  /**
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
};

export const conf1Schema: Schema<Conf1> = s.object<Conf1>({
  outputName: s.optional(s.string()),
  bucket: s.string(),
  path: s.optional(s.string()),
  extractors: s.optional(s.array(s.lazy(() => pathExtractor2Schema))),
  endpoint: s.optional(s.string()),
  disableTimeFilter: s.optional(s.boolean()),
  recurse: s.optional(s.boolean()),
  maxBatchSize: s.optional(s.float64()),
  authType: s.optional(s.lazy(() => authenticationMethod3Schema)),
  parquetChunkSizeMb: s.optional(s.float64()),
  parquetChunkDownloadTimeout: s.optional(s.float64()),
  serviceAccountCredentials: s.string(),
  textSecret: s.string(),
  templateBucket: s.optional(s.string()),
  templatePath: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  _keysMap: {
    parquetChunkSizeMb: "parquetChunkSizeMB",
    templateBucket: "__template_bucket",
    templatePath: "__template_path",
    templateEndpoint: "__template_endpoint",
  },
});
