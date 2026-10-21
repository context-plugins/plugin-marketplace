import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind, kindSchema } from "./kind.js";

export type BasicAuthenticationCreate = {
  /** Type of authentication for webhook request. @default Kind.Basic */
  kind?: Kind;
  /** The username value for basic auth. */
  username: string;
  /** The password value for basic auth. */
  password: string;
};

export const basicAuthenticationCreateSchema: Schema<BasicAuthenticationCreate> =
  s.object<BasicAuthenticationCreate>({
    kind: s.defaulted(kindSchema, Kind.Basic),
    username: s.string(),
    password: s.string(),
  });
