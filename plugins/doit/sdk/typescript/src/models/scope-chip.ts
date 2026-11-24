import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ScopeChip = {
  key?: string;
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scopeChipSchema: Schema<ScopeChip> = s.object<ScopeChip>(
  {
    key: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
