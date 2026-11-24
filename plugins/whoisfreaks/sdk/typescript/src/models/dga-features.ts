import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DgaFeatures = {
  domainLength?: number;
  vowelConsonantRatio?: number;
  ngramPerplexity?: number;
  shannonEntropy?: number;
  digitLetterRatio?: number;
  consonantStreakMax?: number;
  tldInKnownDgaSet?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dgaFeaturesSchema: Schema<DgaFeatures> = s.object<DgaFeatures>(
  {
    domainLength: s.optional(s.int()),
    vowelConsonantRatio: s.optional(s.float64()),
    ngramPerplexity: s.optional(s.float64()),
    shannonEntropy: s.optional(s.float64()),
    digitLetterRatio: s.optional(s.float64()),
    consonantStreakMax: s.optional(s.int()),
    tldInKnownDgaSet: s.optional(s.boolean()),
    _keysMap: {
      domainLength: "domain_length",
      vowelConsonantRatio: "vowel_consonant_ratio",
      ngramPerplexity: "ngram_perplexity",
      shannonEntropy: "shannon_entropy",
      digitLetterRatio: "digit_letter_ratio",
      consonantStreakMax: "consonant_streak_max",
      tldInKnownDgaSet: "tld_in_known_dga_set",
    },
  },
  { additionalProperties: s.json() },
);
