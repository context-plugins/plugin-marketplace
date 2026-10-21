import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action23 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Forbidden: "FORBIDDEN",
  Ok: "OK",
} as const;
export type Action23 = (typeof Action23)[keyof typeof Action23] | (string & {});

export const action23Schema: EnumSchema<Action23> = s.enumOf<Action23>(Action23);
