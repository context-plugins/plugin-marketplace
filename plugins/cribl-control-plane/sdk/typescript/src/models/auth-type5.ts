import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthType5 = {
  ClientCert: "clientCert",
} as const;
export type AuthType5 = (typeof AuthType5)[keyof typeof AuthType5] | (string & {});

export const authType5Schema: EnumSchema<AuthType5> = s.enumOf<AuthType5>(AuthType5);
