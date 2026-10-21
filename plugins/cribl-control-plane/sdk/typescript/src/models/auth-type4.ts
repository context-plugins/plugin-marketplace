import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthType4 = {
  ClientSecret: "clientSecret",
} as const;
export type AuthType4 = (typeof AuthType4)[keyof typeof AuthType4] | (string & {});

export const authType4Schema: EnumSchema<AuthType4> = s.enumOf<AuthType4>(AuthType4);
