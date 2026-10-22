import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action8 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Ok: "OK",
  Jwt: "JWT",
} as const;
export type Action8 = (typeof Action8)[keyof typeof Action8] | (string & {});

export const action8Schema: EnumSchema<Action8> = s.enumOf<Action8>(Action8);
