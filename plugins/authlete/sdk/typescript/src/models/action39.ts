import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the implementation of the batch credential endpoint should take. */
export const Action39 = {
  Ok: "OK",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
  CallerError: "CALLER_ERROR",
} as const;
export type Action39 = (typeof Action39)[keyof typeof Action39] | (string & {});

export const action39Schema: EnumSchema<Action39> = s.enumOf<Action39>(Action39);
