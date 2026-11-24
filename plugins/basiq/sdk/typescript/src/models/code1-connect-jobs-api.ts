import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code1ConnectJobsApi = {
  ParameterNotSupplied: "parameter-not-supplied",
  ParameterNotValid: "parameter-not-valid",
  UnsupportedAccept: "unsupported-accept",
  InvalidContent: "invalid-content",
  InstitutionNotSupported: "institution-not-supported",
  InvalidCredentials: "invalid-credentials",
} as const;
export type Code1ConnectJobsApi =
  | (typeof Code1ConnectJobsApi)[keyof typeof Code1ConnectJobsApi]
  | (string & {});

export const code1ConnectJobsApiSchema: EnumSchema<Code1ConnectJobsApi> =
  s.enumOf<Code1ConnectJobsApi>(Code1ConnectJobsApi);
