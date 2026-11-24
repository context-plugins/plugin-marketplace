import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code. */
export const Code2 = {
  ForbiddenAccess: "forbidden-access",
  NoProductionAccess: "no-production-access",
  AccessDenied: "access-denied",
} as const;
export type Code2 = (typeof Code2)[keyof typeof Code2] | (string & {});

export const code2Schema: EnumSchema<Code2> = s.enumOf<Code2>(Code2);
