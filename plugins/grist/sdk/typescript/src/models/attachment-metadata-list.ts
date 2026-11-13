import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record4Schema, type Record4 } from "./record4.js";

export type AttachmentMetadataList = {
  records: Record4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentMetadataListSchema: Schema<AttachmentMetadataList> = s.object<AttachmentMetadataList>(
  {
    records: s.array(s.lazy(() => record4Schema)),
  },
  { additionalProperties: s.json() },
);
