import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";

/** Request payload for digitizing a document */
export type DigitizationRequest = {
  /**
   * Reference identifier for the document. This can be a file path or a document reference key used
   * by UiPath activities.
   */
  documentId: string;
  /** MIME type of the document being submitted */
  contentType?: ContentType;
  /** Base64-encoded document content when submitting inline */
  documentBase64?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const digitizationRequestSchema: Schema<DigitizationRequest> = s.object<DigitizationRequest>(
  {
    documentId: s.string(),
    contentType: s.optional(s.lazy(() => contentTypeSchema)),
    documentBase64: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
