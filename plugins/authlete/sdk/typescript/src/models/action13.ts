import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action13 = {
  Ok: "OK",
  NoContent: "NO_CONTENT",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  NotFound: "NOT_FOUND",
  CallerError: "CALLER_ERROR",
  AuthleteError: "AUTHLETE_ERROR",
} as const;
export type Action13 = (typeof Action13)[keyof typeof Action13] | (string & {});

export const action13Schema: EnumSchema<Action13> = s.enumOf<Action13>(Action13);
