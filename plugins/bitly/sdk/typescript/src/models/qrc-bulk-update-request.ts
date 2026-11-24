import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type QrcBulkUpdateRequest = {
  /** archive or edit_tags */
  action: Action;
  archive?: boolean;
  addTags?: string[];
  removeTags?: string[];
  /** this is limited to 100 QR code ids; Pages QR codes are not supported */
  qrCodeIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrcBulkUpdateRequestSchema: Schema<QrcBulkUpdateRequest> = s.object<QrcBulkUpdateRequest>(
  {
    action: actionSchema,
    archive: s.optional(s.boolean()),
    addTags: s.optional(s.array(s.string())),
    removeTags: s.optional(s.array(s.string())),
    qrCodeIds: s.optional(s.array(s.string())),
    _keysMap: {
      addTags: "add_tags",
      removeTags: "remove_tags",
      qrCodeIds: "qr_code_ids",
    },
  },
  { additionalProperties: s.json() },
);
