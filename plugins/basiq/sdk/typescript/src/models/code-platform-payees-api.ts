import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code. */
export const CodePlatformPayeesApi = {
  ParameterNotSupplied: "parameter-not-supplied",
  ParameterNotValid: "parameter-not-valid",
  UnsupportedAccept: "unsupported-accept",
  InvalidContent: "invalid-content",
  InstitutionNotSupported: "institution-not-supported",
  InvalidCredentials: "invalid-credentials",
} as const;
export type CodePlatformPayeesApi =
  | (typeof CodePlatformPayeesApi)[keyof typeof CodePlatformPayeesApi]
  | (string & {});

export const codePlatformPayeesApiSchema: EnumSchema<CodePlatformPayeesApi> =
  s.enumOf<CodePlatformPayeesApi>(CodePlatformPayeesApi);
