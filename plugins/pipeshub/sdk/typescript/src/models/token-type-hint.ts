import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Hint about token type (optional, improves performance) */
export const TokenTypeHint = {
  AccessToken: "access_token",
  RefreshToken: "refresh_token",
} as const;
export type TokenTypeHint = (typeof TokenTypeHint)[keyof typeof TokenTypeHint] | (string & {});

export const tokenTypeHintSchema: EnumSchema<TokenTypeHint> = s.enumOf<TokenTypeHint>(TokenTypeHint);
