import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type ErrorResponse = {
  /** HTTP status code. */
  statusCode: number;
  /** HTTP status text. */
  statusMessage: string;
  /** Short error summary (same as statusMessage for most errors). */
  message: string;
  /** Domain error payload set by the handler. */
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    statusCode: s.int(),
    statusMessage: s.string(),
    message: s.string(),
    data: s.optional(s.lazy(() => dataSchema)),
  },
  { additionalProperties: s.json() },
);
