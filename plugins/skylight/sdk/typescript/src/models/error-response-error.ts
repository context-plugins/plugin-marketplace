import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  /** Error message describing what went wrong */
  detail: string;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  detail: s.string(),
});
