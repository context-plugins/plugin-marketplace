import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error describing why an async operation failed. Present only when status is "failed". */
export type AsyncOperationError = {
  title: string;
  /** Stable machine-readable error code. */
  code: string;
  status: number;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncOperationErrorSchema: Schema<AsyncOperationError> = s.object<AsyncOperationError>(
  {
    title: s.string(),
    code: s.string(),
    status: s.int(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
