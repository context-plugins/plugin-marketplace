import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StoreLanguages = {
  languages: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storeLanguagesSchema: Schema<StoreLanguages> = s.object<StoreLanguages>(
  {
    languages: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
