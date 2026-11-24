import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileFormatSchema, type FileFormat } from "./file-format.js";
import { tableFormatSchema, type TableFormat } from "./table-format.js";

/** Optional. Big Lake Managed Tables (BLMT) configuration. */
export type BlmtConfig2 = {
  /** The root path inside the Cloud Storage bucket. */
  rootPath?: string;
  /** Required. The file format. */
  fileFormat?: FileFormat;
  /** Required. The bigquery connection. Format: `{project}.{location}.{name}` */
  connectionName?: string;
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
  /** Required. The table format. */
  tableFormat?: TableFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blmtConfig2Schema: Schema<BlmtConfig2> = s.object<BlmtConfig2>(
  {
    rootPath: s.optional(s.string()),
    fileFormat: s.optional(s.lazy(() => fileFormatSchema)),
    connectionName: s.optional(s.string()),
    bucket: s.optional(s.string()),
    tableFormat: s.optional(s.lazy(() => tableFormatSchema)),
  },
  { additionalProperties: s.json() },
);
