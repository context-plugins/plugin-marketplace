import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Attachments response. */
export type AttachmentResponseDto = {
  /** BILL-generated ID of the attachment. The value begins with `att`. */
  id?: string;
  /** Attachment name */
  name?: string;
  /** Created date and time */
  createdTime?: Date;
  /**
   * URL for downloading the attachment. Use the URL in a GET request to download the attachment.
   */
  downloadLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentResponseDtoSchema: Schema<AttachmentResponseDto> = s.object<AttachmentResponseDto>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    downloadLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
