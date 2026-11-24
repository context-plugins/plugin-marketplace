import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Technology category of the classifier model */
export const ClassifierType = {
  Specialized: "Specialized",
  GenerativeAi: "GenerativeAI",
  KeywordBased: "KeywordBased",
} as const;
export type ClassifierType = (typeof ClassifierType)[keyof typeof ClassifierType] | (string & {});

export const classifierTypeSchema: EnumSchema<ClassifierType> = s.enumOf<ClassifierType>(ClassifierType);
