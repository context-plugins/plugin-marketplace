import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthenticationException1 = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationException1Schema: Schema<AuthenticationException1> =
  s.object<AuthenticationException1>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
