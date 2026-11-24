import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultUiPathDocumentUnderstandingExtractionApiInternalSchema,
  resultUiPathDocumentUnderstandingExtractionApiSchema,
  type ResultUiPathDocumentUnderstandingExtractionApi,
} from "./result-ui-path-document-understanding-extraction-api.js";
import {
  status1UiPathDocumentUnderstandingExtractionApiSchema,
  type Status1UiPathDocumentUnderstandingExtractionApi,
} from "./status1-ui-path-document-understanding-extraction-api.js";

/** Result of an asynchronous extraction job */
export type ExtractionResult = {
  /** Unique identifier of the extraction job */
  requestId?: string;
  /** Current status of the extraction job */
  status?: Status1UiPathDocumentUnderstandingExtractionApi;
  /** Extraction output, populated when status is Succeeded */
  result?: ResultUiPathDocumentUnderstandingExtractionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const extractionResultProperties: s.Shape<ExtractionResult> = {
  requestId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1UiPathDocumentUnderstandingExtractionApiSchema)),
  result: s.optional(s.lazy(() => resultUiPathDocumentUnderstandingExtractionApiInternalSchema)),
};

export const extractionResultInternalSchema: Schema<ExtractionResult> = s.object<ExtractionResult>(
  extractionResultProperties,
  { additionalProperties: s.json() },
);

export const extractionResultSchema: Schema<ExtractionResult> = s.lazySchema(() =>
  s.object<ExtractionResult>(
    {
      ...extractionResultProperties,
      result: s.optional(s.lazy(() => resultUiPathDocumentUnderstandingExtractionApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
