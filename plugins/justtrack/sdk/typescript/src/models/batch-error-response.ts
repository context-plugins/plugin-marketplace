import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchErrorResponse = {
  /** 36 character uuid of the batch */
  batchId: string;
  /** description of the error */
  error: string;
  /** The HTTP status code */
  statusCode: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchErrorResponseProperties: s.Shape<BatchErrorResponse> = {
  batchId: s.string(),
  error: s.string(),
  statusCode: s.int(),
};

export const batchErrorResponseInternalSchema: Schema<BatchErrorResponse> = s.object<BatchErrorResponse>(
  batchErrorResponseProperties,
  { additionalProperties: s.json() },
);

export const batchErrorResponseSchema: Schema<BatchErrorResponse> = s.lazySchema(() =>
  s.object<BatchErrorResponse>(
    {
      ...batchErrorResponseProperties,
      error: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
