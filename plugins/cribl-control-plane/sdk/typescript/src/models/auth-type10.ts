import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use when connecting to Redis. */
export const AuthType10 = {
  None: "none",
} as const;
export type AuthType10 = (typeof AuthType10)[keyof typeof AuthType10] | (string & {});

export const authType10Schema: EnumSchema<AuthType10> = s.enumOf<AuthType10>(AuthType10);
