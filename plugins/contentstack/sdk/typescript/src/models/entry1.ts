import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Publish configuration. */
export type Entry1 = {
  /** List of environment names to publish to. */
  environments?: string[];
  /** List of locale codes to publish. */
  locales?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entry1Schema: Schema<Entry1> = s.object<Entry1>(
  {
    environments: s.optional(s.array(s.string())),
    locales: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
