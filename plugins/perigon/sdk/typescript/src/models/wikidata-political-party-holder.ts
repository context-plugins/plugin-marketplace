import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikidataDateHolderSchema, type WikidataDateHolder } from "./wikidata-date-holder.js";

export type WikidataPoliticalPartyHolder = {
  wikidataId?: string | null;
  label?: string | null;
  startTime?: WikidataDateHolder;
  endTime?: WikidataDateHolder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikidataPoliticalPartyHolderSchema: Schema<WikidataPoliticalPartyHolder> =
  s.object<WikidataPoliticalPartyHolder>(
    {
      wikidataId: s.optionalNullable(s.string()),
      label: s.optionalNullable(s.string()),
      startTime: s.optional(s.lazy(() => wikidataDateHolderSchema)),
      endTime: s.optional(s.lazy(() => wikidataDateHolderSchema)),
    },
    { additionalProperties: s.json() },
  );
