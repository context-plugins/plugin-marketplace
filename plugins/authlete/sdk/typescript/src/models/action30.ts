import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Result of the API call */
export const Action30 = {
  Success: "SUCCESS",
  InvalidRequest: "INVALID_REQUEST",
  ServerError: "SERVER_ERROR",
} as const;
export type Action30 = (typeof Action30)[keyof typeof Action30] | (string & {});

export const action30Schema: EnumSchema<Action30> = s.enumOf<Action30>(Action30);
