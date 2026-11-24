import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A response object returned from a batch request. */
export type BatchResponse = {
  /** The HTTP status code that the invoked endpoint returned. */
  statusCode?: number;
  /**
   * A map of HTTP headers specific to this result. This is primarily used for returning a
   * `Location` header to accompany a `201 Created` result. The parent HTTP response will contain
   * all common headers.
   */
  headers?: Record<string, unknown>;
  /** The JSON body that the invoked endpoint returned. */
  body?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResponseSchema: Schema<BatchResponse> = s.object<BatchResponse>(
  {
    statusCode: s.optional(s.int()),
    headers: s.optional(s.record(s.string(), s.unknown())),
    body: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      statusCode: "status_code",
    },
  },
  { additionalProperties: s.json() },
);
