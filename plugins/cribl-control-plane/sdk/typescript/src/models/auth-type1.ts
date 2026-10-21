import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use when connecting to Redis. */
export const AuthType1 = {
  Manual: "manual",
} as const;
export type AuthType1 = (typeof AuthType1)[keyof typeof AuthType1] | (string & {});

export const authType1Schema: EnumSchema<AuthType1> = s.enumOf<AuthType1>(AuthType1);
