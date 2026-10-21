import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ApiErrorModel = {
  error: Error3;
};

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>({
  error: error3Schema,
});
