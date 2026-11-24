import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when a profile is not found */
export type ProfileNotFoundError = {
  /** @default "Profile not found" */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileNotFoundErrorSchema: Schema<ProfileNotFoundError> = s.object<ProfileNotFoundError>(
  {
    detail: s.defaulted(s.string(), "Profile not found"),
  },
  { additionalProperties: s.json() },
);
