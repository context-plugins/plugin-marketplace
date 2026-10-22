import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenType2 = {
  Bearer: "Bearer",
  DPoP: "DPoP",
  Na: "N_A",
  Connect: "connect",
} as const;
export type TokenType2 = (typeof TokenType2)[keyof typeof TokenType2] | (string & {});

export const tokenType2Schema: EnumSchema<TokenType2> = s.enumOf<TokenType2>(TokenType2);
