import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Hint about token type */
export const TokenTypeHint1 = {
  AccessToken: "access_token",
  RefreshToken: "refresh_token",
} as const;
export type TokenTypeHint1 = (typeof TokenTypeHint1)[keyof typeof TokenTypeHint1] | (string & {});

export const tokenTypeHint1Schema: EnumSchema<TokenTypeHint1> = s.enumOf<TokenTypeHint1>(TokenTypeHint1);
