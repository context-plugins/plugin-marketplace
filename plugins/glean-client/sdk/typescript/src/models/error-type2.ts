import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorType2 = {
  NoPermission: "NO_PERMISSION",
  InvalidId: "INVALID_ID",
  ExistingShortcut: "EXISTING_SHORTCUT",
  InvalidChars: "INVALID_CHARS",
} as const;
export type ErrorType2 = (typeof ErrorType2)[keyof typeof ErrorType2] | (string & {});

export const errorType2Schema: EnumSchema<ErrorType2> = s.enumOf<ErrorType2>(ErrorType2);
