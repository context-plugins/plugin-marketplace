import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the API caller should take. */
export const Action19 = {
  Ok: "OK",
  ServerError: "SERVER_ERROR",
  CallerError: "CALLER_ERROR",
} as const;
export type Action19 = (typeof Action19)[keyof typeof Action19] | (string & {});

export const action19Schema: EnumSchema<Action19> = s.enumOf<Action19>(Action19);
