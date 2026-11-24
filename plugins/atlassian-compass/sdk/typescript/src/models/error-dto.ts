import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An error. */
export type ErrorDto = {
  /** A code representing the type of error. */
  type?: string | null;
  /** A message describing the error. */
  message?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDtoSchema: Schema<ErrorDto> = s.object<ErrorDto>(
  {
    type: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
