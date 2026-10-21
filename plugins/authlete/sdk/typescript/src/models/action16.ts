import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action16 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  InvalidTicket: "INVALID_TICKET",
  Ok: "OK",
} as const;
export type Action16 = (typeof Action16)[keyof typeof Action16] | (string & {});

export const action16Schema: EnumSchema<Action16> = s.enumOf<Action16>(Action16);
