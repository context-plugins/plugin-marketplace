import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the /auth/authorization/ticket/info API call. */
export const Action43 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  CallerError: "CALLER_ERROR",
  AuthleteError: "AUTHLETE_ERROR",
} as const;
export type Action43 = (typeof Action43)[keyof typeof Action43] | (string & {});

export const action43Schema: EnumSchema<Action43> = s.enumOf<Action43>(Action43);
