import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiLimitExceededException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiLimitExceededExceptionSchema: Schema<ApiLimitExceededException> =
  s.object<ApiLimitExceededException>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
