import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Lookup = {
  label?: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lookupSchema: Schema<Lookup> = s.object<Lookup>(
  {
    label: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
