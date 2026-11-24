import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1FileExtract429Error = {
  /** Human-readable error message. */
  msg: string;
  /**
   * Seconds until the generation budget resets (mirrors Retry-After). Absent on the upload-limiter
   * variant.
   */
  retryAfter?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FileExtract429ErrorSchema: Schema<ApiV1FileExtract429Error> =
  s.object<ApiV1FileExtract429Error>(
    {
      msg: s.string(),
      retryAfter: s.optional(s.float64()),
      _keysMap: {
        retryAfter: "retry_after",
      },
    },
    { additionalProperties: s.json() },
  );
