import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

export type AuthenticationErrorError = {
  success?: boolean;
  error?: Error4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationErrorErrorSchema: Schema<AuthenticationErrorError> =
  s.object<AuthenticationErrorError>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error4Schema)),
    },
    { additionalProperties: s.json() },
  );
