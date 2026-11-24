import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The user's name components. */
export type Name1 = {
  /** The user's first name. */
  givenName?: string;
  /** The user's last name. */
  familyName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const name1Schema: Schema<Name1> = s.object<Name1>(
  {
    givenName: s.optional(s.string()),
    familyName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
