import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category1 = {
  IncorrectInformation: "incorrect_information",
  MissingInformation: "missing_information",
  IrrelevantInformation: "irrelevant_information",
  UnclearExplanation: "unclear_explanation",
  PoorCitations: "poor_citations",
  ExcellentAnswer: "excellent_answer",
  HelpfulCitations: "helpful_citations",
  WellExplained: "well_explained",
  Other: "other",
} as const;
export type Category1 = (typeof Category1)[keyof typeof Category1] | (string & {});

export const category1Schema: EnumSchema<Category1> = s.enumOf<Category1>(Category1);
