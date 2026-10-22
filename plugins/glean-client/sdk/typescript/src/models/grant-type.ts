import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of grant type being used. */
export const GrantType = {
  AuthCode: "AUTH_CODE",
  ClientCredentials: "CLIENT_CREDENTIALS",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
