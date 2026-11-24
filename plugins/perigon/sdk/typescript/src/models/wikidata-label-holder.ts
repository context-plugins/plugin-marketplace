import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WikidataLabelHolder = {
  wikidataId?: string | null;
  label?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikidataLabelHolderSchema: Schema<WikidataLabelHolder> = s.object<WikidataLabelHolder>(
  {
    wikidataId: s.optionalNullable(s.string()),
    label: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
