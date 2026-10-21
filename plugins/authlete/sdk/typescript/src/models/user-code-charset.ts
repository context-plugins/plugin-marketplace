import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The character set for end-user verification codes (`user_code`) for Device Flow. */
export const UserCodeCharset = {
  Base20: "BASE20",
  Numeric: "NUMERIC",
} as const;
export type UserCodeCharset = (typeof UserCodeCharset)[keyof typeof UserCodeCharset] | (string & {});

export const userCodeCharsetSchema: EnumSchema<UserCodeCharset> = s.enumOf<UserCodeCharset>(UserCodeCharset);
