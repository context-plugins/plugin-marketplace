import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action14 = {
  BadRequest: "BAD_REQUEST",
  Created: "CREATED",
  Deleted: "DELETED",
  InternalServerError: "INTERNAL_SERVER_ERROR",
  Ok: "OK",
  Unauthorized: "UNAUTHORIZED",
  Updated: "UPDATED",
} as const;
export type Action14 = (typeof Action14)[keyof typeof Action14] | (string & {});

export const action14Schema: EnumSchema<Action14> = s.enumOf<Action14>(Action14);
