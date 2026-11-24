import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportType1Schema, type ExportType1 } from "./export-type1.js";

export type GroupExportResponse = {
  exportType?: ExportType1;
  /** Suggested download filename for the CSV. */
  filename?: string;
  mediaType?: string;
  /** Number of data rows in the CSV (excluding the header row). */
  rowCount?: number;
  columnCount?: number;
  /** CSV column headers in order. */
  columns?: string[];
  /** Size of the raw CSV bytes before base64 encoding. */
  sizeBytes?: number;
  /** CSV file as a data:text/csv;base64,... URI. */
  dataUri?: string;
  /** Metrics window start (Unix seconds) when metrics are included in the export. */
  unixFrom?: number;
  /** Metrics window end (Unix seconds) when metrics are included in the export. */
  unixTo?: number;
  /**
   * True when the match set exceeded the per-request row cap and only the first cap rows were
   * exported.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupExportResponseSchema: Schema<GroupExportResponse> = s.object<GroupExportResponse>(
  {
    exportType: s.optional(s.lazy(() => exportType1Schema)),
    filename: s.optional(s.string()),
    mediaType: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    columnCount: s.optional(s.int()),
    columns: s.optional(s.array(s.string())),
    sizeBytes: s.optional(s.int()),
    dataUri: s.optional(s.string()),
    unixFrom: s.optional(s.int()),
    unixTo: s.optional(s.int()),
    truncated: s.optional(s.boolean()),
    _keysMap: {
      exportType: "export_type",
      mediaType: "media_type",
      rowCount: "row_count",
      columnCount: "column_count",
      sizeBytes: "size_bytes",
      dataUri: "data_uri",
      unixFrom: "unix_from",
      unixTo: "unix_to",
    },
  },
  { additionalProperties: s.json() },
);
