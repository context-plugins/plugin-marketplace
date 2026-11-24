import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies the part of speech that the token represents. */
export const TagAmazonComprehendOperationsApi = {
  Adj: "ADJ",
  Adp: "ADP",
  Adv: "ADV",
  Aux: "AUX",
  Conj: "CONJ",
  Cconj: "CCONJ",
  Det: "DET",
  Intj: "INTJ",
  Noun: "NOUN",
  Num: "NUM",
  O: "O",
  Part: "PART",
  Pron: "PRON",
  Propn: "PROPN",
  Punct: "PUNCT",
  Sconj: "SCONJ",
  Sym: "SYM",
  Verb: "VERB",
} as const;
export type TagAmazonComprehendOperationsApi =
  | (typeof TagAmazonComprehendOperationsApi)[keyof typeof TagAmazonComprehendOperationsApi]
  | (string & {});

export const tagAmazonComprehendOperationsApiSchema: EnumSchema<TagAmazonComprehendOperationsApi> =
  s.enumOf<TagAmazonComprehendOperationsApi>(TagAmazonComprehendOperationsApi);
