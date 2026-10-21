import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action22 = {
  ServerError: "SERVER_ERROR",
  UserCodeNotExist: "USER_CODE_NOT_EXIST",
  UserCodeExpired: "USER_CODE_EXPIRED",
  InvalidRequest: "INVALID_REQUEST",
  Success: "SUCCESS",
} as const;
export type Action22 = (typeof Action22)[keyof typeof Action22] | (string & {});

export const action22Schema: EnumSchema<Action22> = s.enumOf<Action22>(Action22);
