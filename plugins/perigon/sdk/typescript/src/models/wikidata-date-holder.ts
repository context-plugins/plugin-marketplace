import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WikidataDateHolder = {
  time?: string | null;
  precision?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikidataDateHolderSchema: Schema<WikidataDateHolder> = s.object<WikidataDateHolder>(
  {
    time: s.optionalNullable(s.string()),
    precision: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
