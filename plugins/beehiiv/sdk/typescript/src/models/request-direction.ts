import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction of the request. Defaults to `asc`. */
export const RequestDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type RequestDirection = (typeof RequestDirection)[keyof typeof RequestDirection] | (string & {});

export const requestDirectionSchema: EnumSchema<RequestDirection> =
  s.enumOf<RequestDirection>(RequestDirection);
