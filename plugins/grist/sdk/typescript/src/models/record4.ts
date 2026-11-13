import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentMetadataSchema, type AttachmentMetadata } from "./attachment-metadata.js";

export type Record4 = {
  id: number;
  fields: AttachmentMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const record4Schema: Schema<Record4> = s.object<Record4>(
  {
    id: s.float64(),
    fields: attachmentMetadataSchema,
  },
  { additionalProperties: s.json() },
);
