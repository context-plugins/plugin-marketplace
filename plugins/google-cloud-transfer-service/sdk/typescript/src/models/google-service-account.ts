import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google service account */
export type GoogleServiceAccount = {
  /** Email address of the service account. */
  accountEmail?: string;
  /** Unique identifier for the service account. */
  subjectId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleServiceAccountSchema: Schema<GoogleServiceAccount> = s.object<GoogleServiceAccount>(
  {
    accountEmail: s.optional(s.string()),
    subjectId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
