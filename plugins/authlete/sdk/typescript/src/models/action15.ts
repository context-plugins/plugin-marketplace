import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action15 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  UserIdentification: "USER_IDENTIFICATION",
} as const;
export type Action15 = (typeof Action15)[keyof typeof Action15] | (string & {});

export const action15Schema: EnumSchema<Action15> = s.enumOf<Action15>(Action15);
