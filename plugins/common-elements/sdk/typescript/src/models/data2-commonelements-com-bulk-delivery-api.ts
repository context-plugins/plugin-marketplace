import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data2CommonelementsComBulkDeliveryApi = {
  /** queued, running, succeeded, failed, or cancelled. */
  status?: string;
  /** Rows written so far, or in total once finished. */
  rowsWritten?: number | null;
  /** How many parts the artifact was split into. */
  partCount?: number | null;
  /** Signed download link, present only while the delivery is downloadable. */
  downloadUrl?: string | null;
  /** Machine-readable failure reason. Switch on this, not on the message. */
  errorCode?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2CommonelementsComBulkDeliveryApiSchema: Schema<Data2CommonelementsComBulkDeliveryApi> =
  s.object<Data2CommonelementsComBulkDeliveryApi>(
    {
      status: s.optional(s.string()),
      rowsWritten: s.optionalNullable(s.float64()),
      partCount: s.optionalNullable(s.float64()),
      downloadUrl: s.optionalNullable(s.string()),
      errorCode: s.optionalNullable(s.string()),
      _keysMap: {
        rowsWritten: "rows_written",
        partCount: "part_count",
        downloadUrl: "download_url",
        errorCode: "error_code",
      },
    },
    { additionalProperties: s.json() },
  );
