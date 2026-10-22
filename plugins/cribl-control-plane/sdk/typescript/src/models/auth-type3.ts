import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use when connecting to Redis. */
export const AuthType3 = {
  TextSecret: "textSecret",
} as const;
export type AuthType3 = (typeof AuthType3)[keyof typeof AuthType3] | (string & {});

export const authType3Schema: EnumSchema<AuthType3> = s.enumOf<AuthType3>(AuthType3);
