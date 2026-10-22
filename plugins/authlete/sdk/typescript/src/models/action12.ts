import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the implementation of the token endpoint should take. */
export const Action12 = {
  Ok: "OK",
  InternalServerError: "INTERNAL_SERVER_ERROR",
  CallerError: "CALLER_ERROR",
} as const;
export type Action12 = (typeof Action12)[keyof typeof Action12] | (string & {});

export const action12Schema: EnumSchema<Action12> = s.enumOf<Action12>(Action12);
