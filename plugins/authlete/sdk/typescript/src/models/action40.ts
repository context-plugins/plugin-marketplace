import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the deferred credential endpoint should take. */
export const Action40 = {
  Ok: "OK",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action40 = (typeof Action40)[keyof typeof Action40] | (string & {});

export const action40Schema: EnumSchema<Action40> = s.enumOf<Action40>(Action40);
