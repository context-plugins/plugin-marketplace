import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikidataDateHolderSchema, type WikidataDateHolder } from "./wikidata-date-holder.js";
import { wikidataLabelHolderSchema, type WikidataLabelHolder } from "./wikidata-label-holder.js";

export type WikidataPositionHolder = {
  wikidataId?: string | null;
  label?: string | null;
  startTime?: WikidataDateHolder;
  endTime?: WikidataDateHolder;
  employer?: WikidataLabelHolder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikidataPositionHolderSchema: Schema<WikidataPositionHolder> = s.object<WikidataPositionHolder>(
  {
    wikidataId: s.optionalNullable(s.string()),
    label: s.optionalNullable(s.string()),
    startTime: s.optional(s.lazy(() => wikidataDateHolderSchema)),
    endTime: s.optional(s.lazy(() => wikidataDateHolderSchema)),
    employer: s.optional(s.lazy(() => wikidataLabelHolderSchema)),
  },
  { additionalProperties: s.json() },
);
