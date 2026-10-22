import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType23 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  SslUserCertificate: "sslUserCertificate",
} as const;
export type AuthenticationType23 =
  | (typeof AuthenticationType23)[keyof typeof AuthenticationType23]
  | (string & {});

export const authenticationType23Schema: EnumSchema<AuthenticationType23> =
  s.enumOf<AuthenticationType23>(AuthenticationType23);
