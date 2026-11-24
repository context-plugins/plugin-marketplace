import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSignatureAttachmentRequest = {
  /** File name of the attachment. */
  filename: string;
  /**
   * Content type of the attachment. Supported types: `application/pdf`,
   * `application/x-tika-msoffice`, `application/x-tika-ooxml`, `application/msword`,
   * `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
   * `application/vnd.ms-word.document.macroEnabled.12`, `application/vnd.ms-excel`,
   * `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
   * `application/vnd.ms-excel.sheet.macroenabled.12`, `application/vnd.ms-powerpoint`,
   * `application/vnd.openxmlformats-officedocument.presentationml.presentation`,
   * `application/vnd.ms-powerpoint.presentation.macroEnabled.12`, `image/gif`, `image/jpeg`,
   * `image/png`, `text/plain`
   */
  contentType: string;
  /** Base64 encoded bytes of the attachment. */
  content: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSignatureAttachmentRequestSchema: Schema<CreateSignatureAttachmentRequest> =
  s.object<CreateSignatureAttachmentRequest>(
    {
      filename: s.string(),
      contentType: s.string(),
      content: s.string(),
      _keysMap: {
        contentType: "content_type",
      },
    },
    { additionalProperties: s.json() },
  );
