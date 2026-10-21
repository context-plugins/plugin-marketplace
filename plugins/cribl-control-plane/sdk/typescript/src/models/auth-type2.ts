import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use when connecting to Redis. */
export const AuthType2 = {
  CredentialsSecret: "credentialsSecret",
} as const;
export type AuthType2 = (typeof AuthType2)[keyof typeof AuthType2] | (string & {});

export const authType2Schema: EnumSchema<AuthType2> = s.enumOf<AuthType2>(AuthType2);
