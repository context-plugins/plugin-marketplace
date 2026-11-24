import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PathOverride. Path message defines path override for HTTP targets. */
export type PathOverride = {
  /** The URI path (e.g., /users/1234). Default is an empty string. */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pathOverrideSchema: Schema<PathOverride> = s.object<PathOverride>(
  {
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
