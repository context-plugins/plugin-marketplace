import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action1 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Location: "LOCATION",
  Form: "FORM",
} as const;
export type Action1 = (typeof Action1)[keyof typeof Action1] | (string & {});

export const action1Schema: EnumSchema<Action1> = s.enumOf<Action1>(Action1);
