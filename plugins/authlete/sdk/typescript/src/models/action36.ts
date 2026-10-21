import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the credential endpoint should take. */
export const Action36 = {
  Ok: "OK",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action36 = (typeof Action36)[keyof typeof Action36] | (string & {});

export const action36Schema: EnumSchema<Action36> = s.enumOf<Action36>(Action36);
