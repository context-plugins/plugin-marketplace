import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the implementation of the deferred credential endpoint should take. */
export const Action41 = {
  Ok: "OK",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
  CallerError: "CALLER_ERROR",
} as const;
export type Action41 = (typeof Action41)[keyof typeof Action41] | (string & {});

export const action41Schema: EnumSchema<Action41> = s.enumOf<Action41>(Action41);
