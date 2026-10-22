import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TooManyRequestsError = {
  code?: string;
  message?: string;
};

export const tooManyRequestsErrorSchema: Schema<TooManyRequestsError> = s.object<TooManyRequestsError>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
