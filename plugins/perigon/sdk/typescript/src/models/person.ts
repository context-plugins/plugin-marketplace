import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageHolderSchema, type ImageHolder } from "./image-holder.js";
import { wikidataDateHolderSchema, type WikidataDateHolder } from "./wikidata-date-holder.js";
import { wikidataLabelHolderSchema, type WikidataLabelHolder } from "./wikidata-label-holder.js";
import {
  wikidataPoliticalPartyHolderSchema,
  type WikidataPoliticalPartyHolder,
} from "./wikidata-political-party-holder.js";
import { wikidataPositionHolderSchema, type WikidataPositionHolder } from "./wikidata-position-holder.js";

export type Person = {
  wikidataId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  gender?: WikidataLabelHolder;
  dateOfBirth?: WikidataDateHolder;
  dateOfDeath?: WikidataDateHolder;
  description?: string | null;
  aliases?: string[] | null;
  occupation?: WikidataLabelHolder[] | null;
  position?: WikidataPositionHolder[] | null;
  politicalParty?: WikidataPoliticalPartyHolder[] | null;
  image?: ImageHolder;
  abstract?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSchema: Schema<Person> = s.object<Person>(
  {
    wikidataId: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.string()),
    updatedAt: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    gender: s.optional(s.lazy(() => wikidataLabelHolderSchema)),
    dateOfBirth: s.optional(s.lazy(() => wikidataDateHolderSchema)),
    dateOfDeath: s.optional(s.lazy(() => wikidataDateHolderSchema)),
    description: s.optionalNullable(s.string()),
    aliases: s.optionalNullable(s.array(s.string())),
    occupation: s.optionalNullable(s.array(s.lazy(() => wikidataLabelHolderSchema))),
    position: s.optionalNullable(s.array(s.lazy(() => wikidataPositionHolderSchema))),
    politicalParty: s.optionalNullable(s.array(s.lazy(() => wikidataPoliticalPartyHolderSchema))),
    image: s.optional(s.lazy(() => imageHolderSchema)),
    abstract: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
