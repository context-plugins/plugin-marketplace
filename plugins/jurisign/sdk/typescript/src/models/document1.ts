import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document1 = {
  id?: string;
  title?: string;
  pageCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const document1Schema: Schema<Document1> = s.object<Document1>(
  {
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    pageCount: s.optional(s.int()),
    _keysMap: {
      pageCount: "page_count",
    },
  },
  { additionalProperties: s.json() },
);
