import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HasReferences = {
  references?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hasReferencesSchema: Schema<HasReferences> = s.object<HasReferences>(
  {
    references: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
