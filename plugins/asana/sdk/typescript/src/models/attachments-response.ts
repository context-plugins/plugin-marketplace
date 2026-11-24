import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attachmentResponseInternalSchema,
  attachmentResponseSchema,
  type AttachmentResponse,
} from "./attachment-response.js";

export type AttachmentsResponse = {
  data?: AttachmentResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const attachmentsResponseProperties: s.Shape<AttachmentsResponse> = {
  data: s.optional(s.lazy(() => attachmentResponseInternalSchema)),
};

export const attachmentsResponseInternalSchema: Schema<AttachmentsResponse> = s.object<AttachmentsResponse>(
  attachmentsResponseProperties,
  { additionalProperties: s.json() },
);

export const attachmentsResponseSchema: Schema<AttachmentsResponse> = s.lazySchema(() =>
  s.object<AttachmentsResponse>(
    {
      ...attachmentsResponseProperties,
      data: s.optional(s.lazy(() => attachmentResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
