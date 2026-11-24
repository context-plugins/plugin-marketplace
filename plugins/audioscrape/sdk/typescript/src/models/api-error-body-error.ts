import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageInfo2Schema, type UsageInfo2 } from "./usage-info2.js";

export type ApiErrorBodyError = {
  /** Stable machine-readable error code (UPPERCASE_SNAKE_CASE). */
  code: string;
  /** Human-readable error message. */
  message: string;
  usage?: UsageInfo2 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiErrorBodyErrorSchema: Schema<ApiErrorBodyError> = s.object<ApiErrorBodyError>(
  {
    code: s.string(),
    message: s.string(),
    usage: s.optionalNullable(s.lazy(() => usageInfo2Schema)),
  },
  { additionalProperties: s.json() },
);
