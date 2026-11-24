import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response from `POST /api/workspaces/{workspace}/export`. */
export type CreateExportJobResponse = {
  /** Numeric ID of the newly created export job. */
  jobId: number;
  /** Always `"queued"` immediately after creation. */
  status: string;
  /** Relative URL clients should poll for status + the eventual download URL. */
  statusUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExportJobResponseSchema: Schema<CreateExportJobResponse> =
  s.object<CreateExportJobResponse>(
    {
      jobId: s.int(),
      status: s.string(),
      statusUrl: s.string(),
      _keysMap: {
        jobId: "job_id",
        statusUrl: "status_url",
      },
    },
    { additionalProperties: s.json() },
  );
