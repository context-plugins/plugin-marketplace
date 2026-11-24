import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentJuriSignSignRequestsApi = {
  id?: string;
  title?: string;
  pageCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentJuriSignSignRequestsApiSchema: Schema<DocumentJuriSignSignRequestsApi> =
  s.object<DocumentJuriSignSignRequestsApi>(
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
