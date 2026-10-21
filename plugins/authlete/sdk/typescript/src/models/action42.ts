import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the `/auth/authorization/ticket/info` API call. */
export const Action42 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  CallerError: "CALLER_ERROR",
  AuthleteError: "AUTHLETE_ERROR",
} as const;
export type Action42 = (typeof Action42)[keyof typeof Action42] | (string & {});

export const action42Schema: EnumSchema<Action42> = s.enumOf<Action42>(Action42);
