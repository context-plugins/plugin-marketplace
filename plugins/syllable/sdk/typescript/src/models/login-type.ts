import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of login to use for the user. */
export const LoginType = {
  Google: "google",
  UsernameAndPassword: "username_and_password",
} as const;
export type LoginType = (typeof LoginType)[keyof typeof LoginType] | (string & {});

export const loginTypeSchema: EnumSchema<LoginType> = s.enumOf<LoginType>(LoginType);
