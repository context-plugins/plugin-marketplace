import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultErrorDto = {
  /** HTTP status code. */
  statusCode: number;
  /** Human-readable error message. */
  message: string;
};

export const defaultErrorDtoSchema: Schema<DefaultErrorDto> = s.object<DefaultErrorDto>({
  statusCode: s.int(),
  message: s.string(),
});
