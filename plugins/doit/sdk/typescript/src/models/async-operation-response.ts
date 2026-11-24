import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1DoiTReportsApiSchema, type Status1DoiTReportsApi } from "./status1-doi-treports-api.js";

/**
 * Response envelope for an async report operation. Returned on 202 (new operation) and 200
 * (dry-run). On dry-run, operationId is absent and status is "dry_run".
 */
export type AsyncOperationResponse = {
  /** Unique identifier for the operation. Absent on dry-run responses. */
  operationId?: string;
  /** Current lifecycle status of the operation. */
  status?: Status1DoiTReportsApi;
  /** Time the operation was created (absent on dry-run). */
  createTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncOperationResponseSchema: Schema<AsyncOperationResponse> = s.object<AsyncOperationResponse>(
  {
    operationId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1DoiTReportsApiSchema)),
    createTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
