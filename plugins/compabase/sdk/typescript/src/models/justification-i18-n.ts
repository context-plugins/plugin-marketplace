import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JustificationI18N = {
  en?: string;
  de?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const justificationI18NSchema: Schema<JustificationI18N> = s.object<JustificationI18N>(
  {
    en: s.optional(s.string()),
    de: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
