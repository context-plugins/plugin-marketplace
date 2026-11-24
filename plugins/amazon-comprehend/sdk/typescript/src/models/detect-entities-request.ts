import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentReaderConfigSchema, type DocumentReaderConfig } from "./document-reader-config.js";
import { languageCode17Schema, type LanguageCode17 } from "./language-code17.js";

export type DetectEntitiesRequest = {
  /**
   * A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter,
   * do not use the Bytes parameter.
   */
  text?: string;
  /**
   * The language of the input documents. You can specify any of the primary languages supported by
   * Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model,
   * Amazon Comprehend uses the language of your custom model, and it ignores any language code that
   * you specify here. All input documents must be in the same language.
   */
  languageCode?: LanguageCode17;
  /**
   * The Amazon Resource Name of an endpoint that is associated with a custom entity recognition
   * model. Provide an endpoint if you want to detect entities by using your own custom model
   * instead of the default model that is used by Amazon Comprehend. If you specify an endpoint,
   * Amazon Comprehend uses the language of your custom model, and it ignores any language code that
   * you provide in your request. For information about endpoints, see Managing endpoints.
   */
  endpointArn?: string;
  /**
   * This field applies only when you use a custom entity recognition model that was trained with
   * PDF annotations. For other cases, enter your text input in the Text field. Use the Bytes
   * parameter to input a text, PDF, Word or image file. Using a plain-text file in the Bytes
   * parameter is equivelent to using the Text parameter (the Entities field in the response is
   * identical). You can also use the Bytes parameter to input an Amazon Textract DetectDocumentText
   * or AnalyzeDocument output file. Provide the input document as a sequence of base64-encoded
   * bytes. If your code uses an Amazon Web Services SDK
   */
  bytes?: string;
  documentReaderConfig?: DocumentReaderConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectEntitiesRequestSchema: Schema<DetectEntitiesRequest> = s.object<DetectEntitiesRequest>(
  {
    text: s.optional(s.string()),
    languageCode: s.optional(s.lazy(() => languageCode17Schema)),
    endpointArn: s.optional(s.string()),
    bytes: s.optional(s.string()),
    documentReaderConfig: s.optional(s.lazy(() => documentReaderConfigSchema)),
    _keysMap: {
      text: "Text",
      languageCode: "LanguageCode",
      endpointArn: "EndpointArn",
      bytes: "Bytes",
      documentReaderConfig: "DocumentReaderConfig",
    },
  },
  { additionalProperties: s.json() },
);
