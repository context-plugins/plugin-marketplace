import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the implementation of the credential endpoint should take. */
export const Action37 = {
  Ok: "OK",
  OkJwt: "OK_JWT",
  Accepted: "ACCEPTED",
  AcceptedJwt: "ACCEPTED_JWT",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
  CallerError: "CALLER_ERROR",
} as const;
export type Action37 = (typeof Action37)[keyof typeof Action37] | (string & {});

export const action37Schema: EnumSchema<Action37> = s.enumOf<Action37>(Action37);
