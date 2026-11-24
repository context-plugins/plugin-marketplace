import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Technology category of the extractor model */
export const ExtractorType = {
  Specialized: "Specialized",
  GenerativeAi: "GenerativeAI",
  FormExtractor: "FormExtractor",
  IntelligentFormExtractor: "IntelligentFormExtractor",
} as const;
export type ExtractorType = (typeof ExtractorType)[keyof typeof ExtractorType] | (string & {});

export const extractorTypeSchema: EnumSchema<ExtractorType> = s.enumOf<ExtractorType>(ExtractorType);
