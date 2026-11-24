import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * URI path. When specified, replaces the existing path of the task URL. Setting the path value to
 * an empty string clears the URI path segment.
 */
export type PathOverride2 = {
  /** The URI path (e.g., /users/1234). Default is an empty string. */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pathOverride2Schema: Schema<PathOverride2> = s.object<PathOverride2>(
  {
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
