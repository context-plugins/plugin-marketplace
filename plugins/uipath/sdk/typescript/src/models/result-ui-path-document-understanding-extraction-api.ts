import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  extractionResultDataInternalSchema,
  extractionResultDataSchema,
  type ExtractionResultData,
} from "./extraction-result-data.js";

/** Extraction output, populated when status is Succeeded */
export type ResultUiPathDocumentUnderstandingExtractionApi = {
  /** Document ID from which data was extracted */
  documentId?: string;
  /** Structured extraction result containing field values and confidence scores */
  extractionResult?: ExtractionResultData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resultUiPathDocumentUnderstandingExtractionApiProperties: s.Shape<ResultUiPathDocumentUnderstandingExtractionApi> =
  {
    documentId: s.optional(s.string()),
    extractionResult: s.optional(s.lazy(() => extractionResultDataInternalSchema)),
  };

export const resultUiPathDocumentUnderstandingExtractionApiInternalSchema: Schema<ResultUiPathDocumentUnderstandingExtractionApi> =
  s.object<ResultUiPathDocumentUnderstandingExtractionApi>(
    resultUiPathDocumentUnderstandingExtractionApiProperties,
    { additionalProperties: s.json() },
  );

export const resultUiPathDocumentUnderstandingExtractionApiSchema: Schema<ResultUiPathDocumentUnderstandingExtractionApi> =
  s.lazySchema(() =>
    s.object<ResultUiPathDocumentUnderstandingExtractionApi>(
      {
        ...resultUiPathDocumentUnderstandingExtractionApiProperties,
        extractionResult: s.optional(s.lazy(() => extractionResultDataSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
