import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Localized = {
  title?: string;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const localizedSchema: Schema<Localized> = s.object<Localized>(
  {
    title: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
