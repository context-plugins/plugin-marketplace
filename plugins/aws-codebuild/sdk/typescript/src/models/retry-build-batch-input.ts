import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retryTypeSchema, type RetryType } from "./retry-type.js";

export type RetryBuildBatchInput = {
  /** Specifies the identifier of the batch build to restart. */
  id?: string;
  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the
   * RetryBuildBatch request. The token is included in the RetryBuildBatch request and is valid for
   * five minutes. If you repeat the RetryBuildBatch request with the same token, but change a
   * parameter, CodeBuild returns a parameter mismatch error.
   */
  idempotencyToken?: string;
  /** Specifies the type of retry to perform. */
  retryType?: RetryType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryBuildBatchInputSchema: Schema<RetryBuildBatchInput> = s.object<RetryBuildBatchInput>(
  {
    id: s.optional(s.string()),
    idempotencyToken: s.optional(s.string()),
    retryType: s.optional(s.lazy(() => retryTypeSchema)),
  },
  { additionalProperties: s.json() },
);
