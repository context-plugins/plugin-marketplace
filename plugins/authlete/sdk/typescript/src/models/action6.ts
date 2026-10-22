import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action6 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  Ok: "OK",
} as const;
export type Action6 = (typeof Action6)[keyof typeof Action6] | (string & {});

export const action6Schema: EnumSchema<Action6> = s.enumOf<Action6>(Action6);
