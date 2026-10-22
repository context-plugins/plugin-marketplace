import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action21 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  NotExist: "NOT_EXIST",
  Expired: "EXPIRED",
  Valid: "VALID",
} as const;
export type Action21 = (typeof Action21)[keyof typeof Action21] | (string & {});

export const action21Schema: EnumSchema<Action21> = s.enumOf<Action21>(Action21);
