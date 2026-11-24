import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentInputConfig1Schema, type DocumentInputConfig1 } from "./document-input-config1.js";

/** The request message for language detection. */
export type DetectLanguageRequest = {
  /** Optional. The document configuration of the input. */
  documentInputConfig?: DocumentInputConfig1;
  /**
   * Optional. The format of the source text, for example, "text/html", "text/plain". If left blank,
   * the MIME type defaults to "text/html".
   */
  mimeType?: string;
  /**
   * Optional. The labels with user-defined metadata for the request. Label keys and values can be
   * no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed. Label values are
   * optional. Label keys must start with a letter. See
   * https://cloud.google.com/translate/docs/advanced/labels for more information.
   */
  labels?: Record<string, string>;
  /** The content of the input stored as a string. */
  content?: string;
  /**
   * Optional. The language detection model to be used. Format:
   * `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`
   * Only one language detection model is currently supported:
   * `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If
   * not specified, the default model is used.
   */
  model?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLanguageRequestSchema: Schema<DetectLanguageRequest> = s.object<DetectLanguageRequest>(
  {
    documentInputConfig: s.optional(s.lazy(() => documentInputConfig1Schema)),
    mimeType: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    content: s.optional(s.string()),
    model: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
