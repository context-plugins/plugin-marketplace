import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action24 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Forbidden: "FORBIDDEN",
  NotFound: "NOT_FOUND",
  Ok: "OK",
} as const;
export type Action24 = (typeof Action24)[keyof typeof Action24] | (string & {});

export const action24Schema: EnumSchema<Action24> = s.enumOf<Action24>(Action24);
