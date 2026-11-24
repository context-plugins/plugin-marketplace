import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Suggest = {
  id: string;
  term: string;
  country: string;
  added: Date;
  lang: string;
  store: string;
  crawled?: Date;
  app?: string;
  results?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestSchema: Schema<Suggest> = s.object<Suggest>(
  {
    id: s.string(),
    term: s.string(),
    country: s.string(),
    added: s.dateTime(),
    lang: s.string(),
    store: s.string(),
    crawled: s.optional(s.dateTime()),
    app: s.optional(s.string()),
    results: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
