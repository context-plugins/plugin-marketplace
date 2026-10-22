import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Must be set to "client_credentials" */
export const GrantType = {
  ClientCredentials: "client_credentials",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
