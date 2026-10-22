import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorCategory = {
  UserError: "user_error",
  AuthError: "auth_error",
  ServerError: "server_error",
  RateLimitError: "rate_limit_error",
} as const;
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory] | (string & {});

export const errorCategorySchema: EnumSchema<ErrorCategory> = s.enumOf<ErrorCategory>(ErrorCategory);
