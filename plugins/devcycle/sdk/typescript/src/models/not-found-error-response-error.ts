import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotFoundErrorResponseError = {
  /** Response status code */
  statusCode: number;
  /** Error details */
  message: Record<string, unknown>;
  /** Error type */
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundErrorResponseErrorSchema: Schema<NotFoundErrorResponseError> =
  s.object<NotFoundErrorResponseError>(
    {
      statusCode: s.float64(),
      message: s.record(s.string(), s.unknown()),
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
