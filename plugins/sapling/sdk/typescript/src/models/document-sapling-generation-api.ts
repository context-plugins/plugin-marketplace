import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentSaplingGenerationApi = {
  /** Characters of text extracted from the file. */
  characters?: number;
  /** Characters summarized (and billed). */
  charactersUsed?: number;
  fileType?: string;
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentSaplingGenerationApiSchema: Schema<DocumentSaplingGenerationApi> =
  s.object<DocumentSaplingGenerationApi>(
    {
      characters: s.optional(s.int()),
      charactersUsed: s.optional(s.int()),
      fileType: s.optional(s.string()),
      truncated: s.optional(s.boolean()),
      _keysMap: {
        charactersUsed: "characters_used",
        fileType: "file_type",
      },
    },
    { additionalProperties: s.json() },
  );
