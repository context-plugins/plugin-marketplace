import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { secret4Schema, type Secret4 } from "./secret4.js";

/** User-password authentication. */
export type UserPasswordCredentials2 = {
  /** Required. Username for the connection. */
  username?: string;
  /** Required. Password for the connection. */
  password?: Secret4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userPasswordCredentials2Schema: Schema<UserPasswordCredentials2> =
  s.object<UserPasswordCredentials2>(
    {
      username: s.optional(s.string()),
      password: s.optional(s.lazy(() => secret4Schema)),
    },
    { additionalProperties: s.json() },
  );
