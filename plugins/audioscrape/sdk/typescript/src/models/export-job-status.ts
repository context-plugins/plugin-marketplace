import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response from `GET /api/workspaces/{workspace}/export/{job_id}`. */
export type ExportJobStatus = {
  /** Total size of the generated archive in bytes. `null` until completion. */
  bytes?: number | null;
  /** RFC 3339 UTC timestamp the job reached a terminal state. `null` while in flight. */
  completedAt?: string | null;
  /** RFC 3339 UTC timestamp the job was created. */
  createdAt?: string | null;
  /** RFC 3339 UTC timestamp at which `download_url` stops working. */
  downloadExpiresAt?: string | null;
  /**
   * Signed download URL, valid for 15 minutes from this response. Present only when `status ==
   * "completed"`; poll the job again for a fresh one. A finished export stays downloadable for 7
   * days, then reads `expired`.
   */
  downloadUrl?: string | null;
  /** Human-readable failure reason. Set only when `status == "failed"`. */
  errorMessage?: string | null;
  /** Numeric job ID. */
  id: number;
  /** Number of items packaged in the export. `null` until completion. */
  itemCount?: number | null;
  /** One of `queued`, `running`, `completed`, `failed`, `expired`. */
  status: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportJobStatusSchema: Schema<ExportJobStatus> = s.object<ExportJobStatus>(
  {
    bytes: s.optionalNullable(s.int()),
    completedAt: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.string()),
    downloadExpiresAt: s.optionalNullable(s.string()),
    downloadUrl: s.optionalNullable(s.string()),
    errorMessage: s.optionalNullable(s.string()),
    id: s.int(),
    itemCount: s.optionalNullable(s.int()),
    status: s.string(),
    _keysMap: {
      completedAt: "completed_at",
      createdAt: "created_at",
      downloadExpiresAt: "download_expires_at",
      downloadUrl: "download_url",
      errorMessage: "error_message",
      itemCount: "item_count",
    },
  },
  { additionalProperties: s.json() },
);
