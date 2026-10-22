import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ApiErrorError = {
  error: Error3;
};

export const apiErrorErrorSchema: Schema<ApiErrorError> = s.object<ApiErrorError>({
  error: error3Schema,
});
