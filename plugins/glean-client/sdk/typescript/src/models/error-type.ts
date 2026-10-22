import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorType = {
  NoPermission: "NO_PERMISSION",
  InvalidId: "INVALID_ID",
} as const;
export type ErrorType = (typeof ErrorType)[keyof typeof ErrorType] | (string & {});

export const errorTypeSchema: EnumSchema<ErrorType> = s.enumOf<ErrorType>(ErrorType);
