import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisputeAttachmentUpload = {
  /** Unique ID of attachment */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeAttachmentUploadSchema: Schema<DisputeAttachmentUpload> =
  s.object<DisputeAttachmentUpload>(
    {
      id: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
