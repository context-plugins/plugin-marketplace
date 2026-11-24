import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Email = {
  email?: string;
  isPrimary?: boolean;
  isVerified?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailSchema: Schema<Email> = s.object<Email>(
  {
    email: s.optional(s.string()),
    isPrimary: s.optional(s.boolean()),
    isVerified: s.optional(s.boolean()),
    _keysMap: {
      isPrimary: "is_primary",
      isVerified: "is_verified",
    },
  },
  { additionalProperties: s.json() },
);
