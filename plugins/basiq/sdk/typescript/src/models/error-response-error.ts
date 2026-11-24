import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

export type ErrorResponseError = {
  /** Response type for error responses @default "list" */
  type?: "list";
  /** Unique identifier for tracking this request */
  correlationId: string;
  /** Array containing error details */
  data: ErrorDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    type: s.defaulted(s.literal("list"), "list"),
    correlationId: s.string(),
    data: s.array(s.lazy(() => errorDetailSchema)),
  },
  { additionalProperties: s.json() },
);
