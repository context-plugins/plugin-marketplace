import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenType = {
  Bearer: "Bearer",
  DPoP: "DPoP",
  Na: "N_A",
  EndUser: "end-user",
} as const;
export type TokenType = (typeof TokenType)[keyof typeof TokenType] | (string & {});

export const tokenTypeSchema: EnumSchema<TokenType> = s.enumOf<TokenType>(TokenType);
