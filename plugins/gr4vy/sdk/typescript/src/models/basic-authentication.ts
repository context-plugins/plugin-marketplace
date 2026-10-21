import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind, kindSchema } from "./kind.js";
import { Password, passwordSchema } from "./password.js";
import { Type7, type7Schema } from "./type7.js";

export type BasicAuthentication = {
  /** Type of resource for webhook authentication. @default Type7.WebhookAuthentication */
  type?: Type7;
  /** Type of authentication for webhook request. @default Kind.Basic */
  kind?: Kind;
  /** The username value for basic auth. */
  username: string;
  /**
   * The masked password value for basic auth.
   *
   * @default Password.U002AU002AU002AU002AU002AU002AU002AU002A
   */
  password?: Password;
};

export const basicAuthenticationSchema: Schema<BasicAuthentication> = s.object<BasicAuthentication>({
  type: s.defaulted(type7Schema, Type7.WebhookAuthentication),
  kind: s.defaulted(kindSchema, Kind.Basic),
  username: s.string(),
  password: s.defaulted(passwordSchema, Password.U002AU002AU002AU002AU002AU002AU002AU002A),
});
