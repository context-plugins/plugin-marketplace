import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies the part of speech that the token represents. */
export const Tag2 = {
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
export type Tag2 = (typeof Tag2)[keyof typeof Tag2] | (string & {});

export const tag2Schema: EnumSchema<Tag2> = s.enumOf<Tag2>(Tag2);
