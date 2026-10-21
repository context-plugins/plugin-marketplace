import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultErrorDtoError = {
  /** HTTP status code. */
  statusCode: number;
  /** Human-readable error message. */
  message: string;
};

export const defaultErrorDtoErrorSchema: Schema<DefaultErrorDtoError> = s.object<DefaultErrorDtoError>({
  statusCode: s.int(),
  message: s.string(),
});
