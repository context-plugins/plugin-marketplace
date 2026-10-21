import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Result of the API call */
export const Action28 = {
  Success: "SUCCESS",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  ServerError: "SERVER_ERROR",
} as const;
export type Action28 = (typeof Action28)[keyof typeof Action28] | (string & {});

export const action28Schema: EnumSchema<Action28> = s.enumOf<Action28>(Action28);
