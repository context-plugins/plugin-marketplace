import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiResponseOfBoolean = {
  status?: boolean;
  message?: string | null;
  code?: number;
  data?: boolean;
};

export const apiResponseOfBooleanSchema: Schema<ApiResponseOfBoolean> = s.object<ApiResponseOfBoolean>({
  status: s.optional(s.boolean()),
  message: s.optionalNullable(s.string()),
  code: s.optional(s.int()),
  data: s.optional(s.boolean()),
});
