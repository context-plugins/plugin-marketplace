import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Family of the error, from the HTTP status. */
export const Type = {
  AuthenticationError: "authentication_error",
  PermissionError: "permission_error",
  NotFoundError: "not_found_error",
  ConflictError: "conflict_error",
  InvalidRequestError: "invalid_request_error",
  RateLimitError: "rate_limit_error",
  ApiError: "api_error",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
