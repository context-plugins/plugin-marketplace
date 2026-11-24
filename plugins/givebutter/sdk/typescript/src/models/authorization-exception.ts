import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthorizationException = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizationExceptionSchema: Schema<AuthorizationException> = s.object<AuthorizationException>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
