import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extractorTypeSchema, type ExtractorType } from "./extractor-type.js";

/** A model that extracts structured data fields from a document */
export type Extractor = {
  /** Unique identifier of the extractor */
  id?: string;
  /** Display name of the extractor */
  name?: string;
  /** Document type this extractor is designed for */
  documentType?: string;
  /** Technology category of the extractor model */
  extractorType?: ExtractorType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extractorSchema: Schema<Extractor> = s.object<Extractor>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    documentType: s.optional(s.string()),
    extractorType: s.optional(s.lazy(() => extractorTypeSchema)),
  },
  { additionalProperties: s.json() },
);
