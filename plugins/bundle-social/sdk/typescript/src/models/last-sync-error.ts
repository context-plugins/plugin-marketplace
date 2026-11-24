import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastSyncError = {
  code?: string | null;
  message?: string | null;
  retryable?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const lastSyncErrorSchema: Schema<LastSyncError> = s.object<LastSyncError>(
  {
    code: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
    retryable: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.unknown() },
);
