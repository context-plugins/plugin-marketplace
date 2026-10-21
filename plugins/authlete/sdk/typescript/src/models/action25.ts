import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action25 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action25 = (typeof Action25)[keyof typeof Action25] | (string & {});

export const action25Schema: EnumSchema<Action25> = s.enumOf<Action25>(Action25);
