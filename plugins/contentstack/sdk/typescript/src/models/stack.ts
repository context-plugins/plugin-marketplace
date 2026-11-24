import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Contentstack stack, which is an independent content repository. */
export type Stack = {
  /** Unique API key identifying the stack. */
  apiKey?: string;
  /** Unique identifier of the stack. */
  uid?: string;
  /** Display name of the stack. */
  name?: string;
  /** Description of the stack's purpose. */
  description?: string;
  /** The default locale code for the stack. */
  masterLocale?: string;
  /** UID of the organization that owns the stack. */
  orgUid?: string;
  /** ISO 8601 timestamp when the stack was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the stack was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stackSchema: Schema<Stack> = s.object<Stack>(
  {
    apiKey: s.optional(s.string()),
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    masterLocale: s.optional(s.string()),
    orgUid: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      apiKey: "api_key",
      masterLocale: "master_locale",
      orgUid: "org_uid",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
