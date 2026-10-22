import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the batch credential endpoint should take. */
export const Action38 = {
  Ok: "OK",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action38 = (typeof Action38)[keyof typeof Action38] | (string & {});

export const action38Schema: EnumSchema<Action38> = s.enumOf<Action38>(Action38);
