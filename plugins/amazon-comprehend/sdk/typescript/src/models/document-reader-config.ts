import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentReadActionSchema, type DocumentReadAction } from "./document-read-action.js";
import { documentReadModeSchema, type DocumentReadMode } from "./document-read-mode.js";
import { featureTypeSchema, type FeatureType } from "./feature-type.js";

export type DocumentReaderConfig = {
  /**
   * This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract
   * text from PDF files and image files. Enter one of the following values:
   * TEXTRACT_DETECT_DOCUMENT_TEXT - The Amazon Comprehend service uses the DetectDocumentText API
   * operation. TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the AnalyzeDocument
   * API operation.
   */
  documentReadAction: DocumentReadAction;
  /**
   * Determines the text extraction actions for PDF files. Enter one of the following values:
   * SERVICE_DEFAULT - use the Amazon Comprehend service defaults for PDF files.
   * FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the Textract API specified by
   * DocumentReadAction for all PDF files, including digital PDF files.
   */
  documentReadMode?: DocumentReadMode;
  /**
   * Specifies the type of Amazon Textract features to apply. If you chose TEXTRACT_ANALYZE_DOCUMENT
   * as the read action, you must specify one or both of the following values: TABLES - Returns
   * additional information about any tables that are detected in the input document. FORMS -
   * Returns additional information about any forms that are detected in the input document.
   */
  featureTypes?: FeatureType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentReaderConfigSchema: Schema<DocumentReaderConfig> = s.object<DocumentReaderConfig>(
  {
    documentReadAction: documentReadActionSchema,
    documentReadMode: s.optional(s.lazy(() => documentReadModeSchema)),
    featureTypes: s.optional(s.array(s.lazy(() => featureTypeSchema))),
    _keysMap: {
      documentReadAction: "DocumentReadAction",
      documentReadMode: "DocumentReadMode",
      featureTypes: "FeatureTypes",
    },
  },
  { additionalProperties: s.json() },
);
