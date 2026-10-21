import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type ErrorResponse = {
  error?: ErrorObject | null;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: s.optionalNullable(s.lazy(() => errorObjectSchema)),
});
