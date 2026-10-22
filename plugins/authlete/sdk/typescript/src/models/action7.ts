import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action7 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  Ok: "OK",
} as const;
export type Action7 = (typeof Action7)[keyof typeof Action7] | (string & {});

export const action7Schema: EnumSchema<Action7> = s.enumOf<Action7>(Action7);
