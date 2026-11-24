import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InternalServerError = {
  InternalServerError: "Internal Server Error",
} as const;
export type InternalServerError =
  | (typeof InternalServerError)[keyof typeof InternalServerError]
  | (string & {});

export const internalServerErrorSchema: EnumSchema<InternalServerError> =
  s.enumOf<InternalServerError>(InternalServerError);
