import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthenticationException = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationExceptionSchema: Schema<AuthenticationException> =
  s.object<AuthenticationException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
