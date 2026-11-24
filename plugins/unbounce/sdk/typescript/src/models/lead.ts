import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Lead = {
  id?: string;
  pageId?: string;
  formData?: Record<string, unknown>;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const leadSchema: Schema<Lead> = s.object<Lead>(
  {
    id: s.optional(s.string()),
    pageId: s.optional(s.string()),
    formData: s.optional(s.record(s.string(), s.unknown())),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      pageId: "page_id",
      formData: "form_data",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
