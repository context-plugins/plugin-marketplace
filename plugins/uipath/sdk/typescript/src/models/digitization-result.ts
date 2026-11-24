import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusUiPathDocumentUnderstandingDigitizationApiSchema,
  type StatusUiPathDocumentUnderstandingDigitizationApi,
} from "./status-ui-path-document-understanding-digitization-api.js";

/** Result of a document digitization operation */
export type DigitizationResult = {
  /**
   * Unique identifier assigned to the digitized document. Use this ID in subsequent classification,
   * extraction, and validation calls. Results are retained for seven days.
   */
  documentId?: string;
  /** Outcome of the digitization operation */
  status?: StatusUiPathDocumentUnderstandingDigitizationApi;
  /** Number of pages detected in the document */
  pageCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const digitizationResultSchema: Schema<DigitizationResult> = s.object<DigitizationResult>(
  {
    documentId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusUiPathDocumentUnderstandingDigitizationApiSchema)),
    pageCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
