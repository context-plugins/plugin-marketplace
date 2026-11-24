import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Identifier = {
  type?: string;
  value?: string;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identifierSchema: Schema<Identifier> = s.object<Identifier>(
  {
    type: s.optional(s.string()),
    value: s.optional(s.string()),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
