import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationResultItemInternalSchema,
  classificationResultItemSchema,
  type ClassificationResultItem,
} from "./classification-result-item.js";
import {
  extractionResultDataInternalSchema,
  extractionResultDataSchema,
  type ExtractionResultData,
} from "./extraction-result-data.js";

/** Request payload for validating document processing results */
export type ValidationRequest = {
  /** Document ID of the document whose results are to be validated */
  documentId: string;
  /** Classification result for a specific document or page range */
  classificationResult?: ClassificationResultItem;
  /** Structured extraction result containing field values and confidence scores */
  extractionResult?: ExtractionResultData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const validationRequestProperties: s.Shape<ValidationRequest> = {
  documentId: s.string(),
  classificationResult: s.optional(s.lazy(() => classificationResultItemInternalSchema)),
  extractionResult: s.optional(s.lazy(() => extractionResultDataInternalSchema)),
};

export const validationRequestInternalSchema: Schema<ValidationRequest> = s.object<ValidationRequest>(
  validationRequestProperties,
  { additionalProperties: s.json() },
);

export const validationRequestSchema: Schema<ValidationRequest> = s.lazySchema(() =>
  s.object<ValidationRequest>(
    {
      ...validationRequestProperties,
      classificationResult: s.optional(s.lazy(() => classificationResultItemSchema)),
      extractionResult: s.optional(s.lazy(() => extractionResultDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
