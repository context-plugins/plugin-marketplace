import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";

export type AuthMode = {
  /** The authorization type. */
  authType: AuthType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authModeSchema: Schema<AuthMode> = s.object<AuthMode>(
  {
    authType: authTypeSchema,
  },
  { additionalProperties: s.json() },
);
