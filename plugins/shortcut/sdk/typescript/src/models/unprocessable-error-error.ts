import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnprocessableErrorError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unprocessableErrorErrorSchema: Schema<UnprocessableErrorError> =
  s.object<UnprocessableErrorError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
