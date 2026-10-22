import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type ErrorResponseError = {
  error?: ErrorObject | null;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  error: s.optionalNullable(s.lazy(() => errorObjectSchema)),
});
