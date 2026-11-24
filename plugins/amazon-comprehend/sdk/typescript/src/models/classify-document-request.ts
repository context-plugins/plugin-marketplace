import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentReaderConfigSchema, type DocumentReaderConfig } from "./document-reader-config.js";

export type ClassifyDocumentRequest = {
  /**
   * The document text to be analyzed. If you enter text using this parameter, do not use the Bytes
   * parameter.
   */
  text?: string;
  /**
   * The Amazon Resource Number (ARN) of the endpoint. For prompt safety classification, Amazon
   * Comprehend provides the endpoint ARN. For more information about prompt safety classifiers, see
   * Prompt safety classification in the Amazon Comprehend Developer Guide For custom
   * classification, you create an endpoint for your custom model. For more information, see Using
   * Amazon Comprehend endpoints.
   */
  endpointArn: string;
  /**
   * Use the Bytes parameter to input a text, PDF, Word or image file. When you classify a document
   * using a custom model, you can also use the Bytes parameter to input an Amazon Textract
   * DetectDocumentText or AnalyzeDocument output file. To classify a document using the prompt
   * safety classifier, use the Text parameter for input. Provide the input document as a sequence
   * of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents,
   * the SDK may encode the document file bytes for you. The maximum length of this field depends on
   * the input document type. For details, see In
   */
  bytes?: string;
  documentReaderConfig?: DocumentReaderConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifyDocumentRequestSchema: Schema<ClassifyDocumentRequest> =
  s.object<ClassifyDocumentRequest>(
    {
      text: s.optional(s.string()),
      endpointArn: s.string(),
      bytes: s.optional(s.string()),
      documentReaderConfig: s.optional(s.lazy(() => documentReaderConfigSchema)),
      _keysMap: {
        text: "Text",
        endpointArn: "EndpointArn",
        bytes: "Bytes",
        documentReaderConfig: "DocumentReaderConfig",
      },
    },
    { additionalProperties: s.json() },
  );
