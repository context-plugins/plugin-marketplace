import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action26 = {
  Ok: "OK",
  BadRequest: "BAD_REQUEST",
  NotFound: "NOT_FOUND",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action26 = (typeof Action26)[keyof typeof Action26] | (string & {});

export const action26Schema: EnumSchema<Action26> = s.enumOf<Action26>(Action26);
