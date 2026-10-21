import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action11 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  Json: "JSON",
  Jwt: "JWT",
} as const;
export type Action11 = (typeof Action11)[keyof typeof Action11] | (string & {});

export const action11Schema: EnumSchema<Action11> = s.enumOf<Action11>(Action11);
