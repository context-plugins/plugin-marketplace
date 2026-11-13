import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentAttachmentsLocationSchema,
  type DocumentAttachmentsLocation,
} from "./document-attachments-location.js";
import { statusSchema, type Status } from "./status.js";

export type AttachmentsTransferStatus = {
  status?: Status;
  /** The current location of attachment files in the document */
  locationSummary?: DocumentAttachmentsLocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentsTransferStatusSchema: Schema<AttachmentsTransferStatus> =
  s.object<AttachmentsTransferStatus>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      locationSummary: s.optional(s.lazy(() => documentAttachmentsLocationSchema)),
    },
    { additionalProperties: s.json() },
  );
