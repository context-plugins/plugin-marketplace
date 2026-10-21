import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action5 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
} as const;
export type Action5 = (typeof Action5)[keyof typeof Action5] | (string & {});

export const action5Schema: EnumSchema<Action5> = s.enumOf<Action5>(Action5);
