import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Result of the API call. */
export const Action27 = {
  Success: "SUCCESS",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  ServerError: "SERVER_ERROR",
} as const;
export type Action27 = (typeof Action27)[keyof typeof Action27] | (string & {});

export const action27Schema: EnumSchema<Action27> = s.enumOf<Action27>(Action27);
