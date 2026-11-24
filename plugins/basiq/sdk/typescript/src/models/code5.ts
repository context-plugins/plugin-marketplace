import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code5 = {
  UnauthorizedAccess: "unauthorized-access",
  InvalidAuthorizationToken: "invalid-authorization-token",
} as const;
export type Code5 = (typeof Code5)[keyof typeof Code5] | (string & {});

export const code5Schema: EnumSchema<Code5> = s.enumOf<Code5>(Code5);
