import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExtractedCharactersListItem = {
  /** Page number. */
  page?: number;
  /** Number of characters extracted from each page. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extractedCharactersListItemSchema: Schema<ExtractedCharactersListItem> =
  s.object<ExtractedCharactersListItem>(
    {
      page: s.optional(s.int()),
      count: s.optional(s.int()),
      _keysMap: {
        page: "Page",
        count: "Count",
      },
    },
    { additionalProperties: s.json() },
  );
