import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action9 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  InvalidClient: "INVALID_CLIENT",
  BadRequest: "BAD_REQUEST",
  Ok: "OK",
} as const;
export type Action9 = (typeof Action9)[keyof typeof Action9] | (string & {});

export const action9Schema: EnumSchema<Action9> = s.enumOf<Action9>(Action9);
