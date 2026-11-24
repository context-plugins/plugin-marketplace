import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  extractedCharactersListItemSchema,
  type ExtractedCharactersListItem,
} from "./extracted-characters-list-item.js";

export type DocumentMetadata = {
  /** Number of pages in the document. */
  pages?: number;
  /** List of pages in the document, with the number of characters extracted from each page. */
  extractedCharacters?: ExtractedCharactersListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentMetadataSchema: Schema<DocumentMetadata> = s.object<DocumentMetadata>(
  {
    pages: s.optional(s.int()),
    extractedCharacters: s.optional(s.array(s.lazy(() => extractedCharactersListItemSchema))),
    _keysMap: {
      pages: "Pages",
      extractedCharacters: "ExtractedCharacters",
    },
  },
  { additionalProperties: s.json() },
);
