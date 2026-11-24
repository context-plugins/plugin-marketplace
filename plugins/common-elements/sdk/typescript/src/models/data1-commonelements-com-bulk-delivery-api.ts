import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1CommonelementsComBulkDeliveryApi = {
  /** Delivery id. */
  id?: string;
  /** queued, running, succeeded, failed, or cancelled. */
  status?: string;
  /** Rows written once the run has produced output. */
  rowsWritten?: number | null;
  /** Whether the run stopped at the plan's row cap. */
  truncated?: boolean;
  /** Checksum of the artifact, for verifying a download. */
  checksum?: string | null;
  /** When the download link stops working. */
  downloadExpiresAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1CommonelementsComBulkDeliveryApiSchema: Schema<Data1CommonelementsComBulkDeliveryApi> =
  s.object<Data1CommonelementsComBulkDeliveryApi>(
    {
      id: s.optional(s.string()),
      status: s.optional(s.string()),
      rowsWritten: s.optionalNullable(s.float64()),
      truncated: s.optional(s.boolean()),
      checksum: s.optionalNullable(s.string()),
      downloadExpiresAt: s.optionalNullable(s.dateTime()),
      _keysMap: {
        rowsWritten: "rows_written",
        downloadExpiresAt: "download_expires_at",
      },
    },
    { additionalProperties: s.json() },
  );
