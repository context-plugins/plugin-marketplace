import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorDtoSchema, type ErrorDto } from "./error-dto.js";

/** A list of errors that occurred. */
export type ErrorResponseDtoError = {
  /** A list of errors that occurred. */
  errors?: ErrorDto[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseDtoErrorSchema: Schema<ErrorResponseDtoError> = s.object<ErrorResponseDtoError>(
  {
    errors: s.optionalNullable(s.array(s.lazy(() => errorDtoSchema))),
  },
  { additionalProperties: s.json() },
);
