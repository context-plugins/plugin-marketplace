import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for the exception. */
export const Reason = {
  UnauthorizedAccount: "UNAUTHORIZED_ACCOUNT",
  DependencyAccessDenied: "DEPENDENCY_ACCESS_DENIED",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
