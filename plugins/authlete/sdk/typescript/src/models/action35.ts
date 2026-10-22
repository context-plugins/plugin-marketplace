import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the `/vci/offer/info` API call. */
export const Action35 = {
  Ok: "OK",
  Forbidden: "FORBIDDEN",
  NotFound: "NOT_FOUND",
  CallerError: "CALLER_ERROR",
  AuthleteError: "AUTHLETE_ERROR",
} as const;
export type Action35 = (typeof Action35)[keyof typeof Action35] | (string & {});

export const action35Schema: EnumSchema<Action35> = s.enumOf<Action35>(Action35);
