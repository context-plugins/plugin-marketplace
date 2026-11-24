import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MeasuresI18N = {
  en?: string;
  de?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const measuresI18NSchema: Schema<MeasuresI18N> = s.object<MeasuresI18N>(
  {
    en: s.optional(s.string()),
    de: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
