import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfileApikeyRequest = {
  /** If true, regenerate even if a key already exists */
  force?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileApikeyRequestSchema: Schema<ProfileApikeyRequest> = s.object<ProfileApikeyRequest>(
  {
    force: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
