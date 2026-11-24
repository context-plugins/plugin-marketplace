import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code = {
  ParameterNotSupplied: "parameter-not-supplied",
  ParameterNotValid: "parameter-not-valid",
  UnsupportedAccept: "unsupported-accept",
  InvalidContent: "invalid-content",
  InstitutionNotSupported: "institution-not-supported",
  InvalidCredentials: "invalid-credentials",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
