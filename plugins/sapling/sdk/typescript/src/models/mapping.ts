import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Transformation to apply. Defaults to "paraphrase". */
export const Mapping = {
  Paraphrase: "paraphrase",
  PassiveToActive: "passive_to_active",
  ActiveToPassive: "active_to_passive",
  InformalToFormal: "informal_to_formal",
  FormalToInformal: "formal_to_informal",
  SentenceSplit: "sentence_split",
  Reword: "reword",
  GenerateTitle: "generate_title",
  GenerateAcronym: "generate_acronym",
  GenerateMetaDescription: "generate_meta_description",
  Summarize: "summarize",
  Expand: "expand",
  Shorten: "shorten",
  SwitchTone: "switch_tone",
  SwitchTense: "switch_tense",
} as const;
export type Mapping = (typeof Mapping)[keyof typeof Mapping] | (string & {});

export const mappingSchema: EnumSchema<Mapping> = s.enumOf<Mapping>(Mapping);
