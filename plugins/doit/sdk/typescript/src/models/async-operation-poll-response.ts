import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asyncOperationErrorSchema, type AsyncOperationError } from "./async-operation-error.js";
import { statusDoiTReportsApiSchema, type StatusDoiTReportsApi } from "./status-doi-treports-api.js";

/**
 * Response envelope for polling an async report operation. Does not include result data — once
 * status is "succeeded", fetch the result from the operation's results endpoint.
 */
export type AsyncOperationPollResponse = {
  /** Unique identifier for the operation. */
  operationId: string;
  /** Current lifecycle status of the operation. */
  status: StatusDoiTReportsApi;
  /** Time the operation was created. */
  createTime: Date;
  /** Time after which the operation record may be deleted. */
  expireBy: Date;
  /** Error describing why an async operation failed. Present only when status is "failed". */
  error?: AsyncOperationError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncOperationPollResponseSchema: Schema<AsyncOperationPollResponse> =
  s.object<AsyncOperationPollResponse>(
    {
      operationId: s.string(),
      status: statusDoiTReportsApiSchema,
      createTime: s.dateTime(),
      expireBy: s.dateTime(),
      error: s.optional(s.lazy(() => asyncOperationErrorSchema)),
    },
    { additionalProperties: s.json() },
  );
