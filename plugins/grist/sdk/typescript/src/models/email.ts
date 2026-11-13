import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Email = {
  /** The user's email address. */
  value?: string;
  /** Whether this is the primary email. */
  primary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailSchema: Schema<Email> = s.object<Email>(
  {
    value: s.optional(s.string()),
    primary: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
