import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the `/vci/offer/create` API call. */
export const Action34 = {
  Created: "CREATED",
  Forbidden: "FORBIDDEN",
  CallerError: "CALLER_ERROR",
  AuthleteError: "AUTHLETE_ERROR",
} as const;
export type Action34 = (typeof Action34)[keyof typeof Action34] | (string & {});

export const action34Schema: EnumSchema<Action34> = s.enumOf<Action34>(Action34);
