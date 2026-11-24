import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrcBulkUpdate = {
  qrCodeIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrcBulkUpdateSchema: Schema<QrcBulkUpdate> = s.object<QrcBulkUpdate>(
  {
    qrCodeIds: s.optional(s.array(s.string())),
    _keysMap: {
      qrCodeIds: "qr_code_ids",
    },
  },
  { additionalProperties: s.json() },
);
