import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action17 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Forbidden: "FORBIDDEN",
} as const;
export type Action17 = (typeof Action17)[keyof typeof Action17] | (string & {});

export const action17Schema: EnumSchema<Action17> = s.enumOf<Action17>(Action17);
