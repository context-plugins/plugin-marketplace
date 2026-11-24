import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SuggestLite = {
  id: string;
  term: string;
  country: string;
  added: Date;
  lang: string;
  store: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestLiteSchema: Schema<SuggestLite> = s.object<SuggestLite>(
  {
    id: s.string(),
    term: s.string(),
    country: s.string(),
    added: s.dateTime(),
    lang: s.string(),
    store: s.string(),
  },
  { additionalProperties: s.json() },
);
