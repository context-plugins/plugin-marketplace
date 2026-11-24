import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runAttachmentSchema, type RunAttachment } from "./run-attachment.js";

export type RunAttachmentsResponse = {
  attachments: RunAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runAttachmentsResponseSchema: Schema<RunAttachmentsResponse> = s.object<RunAttachmentsResponse>(
  {
    attachments: s.array(s.lazy(() => runAttachmentSchema)),
  },
  { additionalProperties: s.json() },
);
