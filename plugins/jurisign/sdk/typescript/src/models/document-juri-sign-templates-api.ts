import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentJuriSignTemplatesApi = {
  title?: string;
  originalFilename?: string;
  pageCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentJuriSignTemplatesApiSchema: Schema<DocumentJuriSignTemplatesApi> =
  s.object<DocumentJuriSignTemplatesApi>(
    {
      title: s.optional(s.string()),
      originalFilename: s.optional(s.string()),
      pageCount: s.optional(s.int()),
      _keysMap: {
        originalFilename: "original_filename",
        pageCount: "page_count",
      },
    },
    { additionalProperties: s.json() },
  );
