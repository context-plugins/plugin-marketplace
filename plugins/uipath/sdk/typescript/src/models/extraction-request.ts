import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extractorOptionSchema, type ExtractorOption } from "./extractor-option.js";

/** Request payload for extracting data from a previously digitized document */
export type ExtractionRequest = {
  /** Document ID returned by the digitization endpoint */
  documentId: string;
  /** Document type identifier to guide extraction */
  documentTypeId?: string;
  /** Extractors to apply with their configuration options */
  extractorsOptions: ExtractorOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extractionRequestSchema: Schema<ExtractionRequest> = s.object<ExtractionRequest>(
  {
    documentId: s.string(),
    documentTypeId: s.optional(s.string()),
    extractorsOptions: s.array(s.lazy(() => extractorOptionSchema)),
  },
  { additionalProperties: s.json() },
);
