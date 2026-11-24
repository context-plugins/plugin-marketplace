import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorResponseErrorBoomiDataHubGoldenRecordsApi = {
  /** Human-readable error message. */
  message?: string;
  /** Numeric error code. */
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorBoomiDataHubGoldenRecordsApiSchema: Schema<ErrorResponseErrorBoomiDataHubGoldenRecordsApi> =
  s.object<ErrorResponseErrorBoomiDataHubGoldenRecordsApi>(
    {
      message: s.optional(s.string()),
      code: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
