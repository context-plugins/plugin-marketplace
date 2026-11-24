import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The error code. */
export const Code = {
  BadRequest: "bad_request",
  NotFound: "not_found",
  InternalServerError: "internal_server_error",
  Unauthorized: "unauthorized",
  Forbidden: "forbidden",
  RateLimitExceeded: "rate_limit_exceeded",
  InviteExpired: "invite_expired",
  InvitePending: "invite_pending",
  ExceededLimit: "exceeded_limit",
  Conflict: "conflict",
  UnprocessableEntity: "unprocessable_entity",
  ServiceUnavailable: "service_unavailable",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
