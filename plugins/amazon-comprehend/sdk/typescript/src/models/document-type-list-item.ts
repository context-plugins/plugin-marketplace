import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type DocumentTypeListItem = {
  /** Page number. */
  page?: number;
  /** Document type. */
  type?: Type3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentTypeListItemSchema: Schema<DocumentTypeListItem> = s.object<DocumentTypeListItem>(
  {
    page: s.optional(s.int()),
    type: s.optional(s.lazy(() => type3Schema)),
    _keysMap: {
      page: "Page",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
