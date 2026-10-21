import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action20 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Ok: "OK",
} as const;
export type Action20 = (typeof Action20)[keyof typeof Action20] | (string & {});

export const action20Schema: EnumSchema<Action20> = s.enumOf<Action20>(Action20);
