import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

/** The top level error response. */
export type ErrorError = {
  status: number;
  statusText: string;
  errors: ErrorDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    status: s.int(),
    statusText: s.string(),
    errors: s.array(s.lazy(() => errorDetailSchema)),
  },
  { additionalProperties: s.json() },
);
