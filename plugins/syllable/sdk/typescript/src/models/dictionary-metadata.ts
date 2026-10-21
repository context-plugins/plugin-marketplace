import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Audit metadata associated with a dictionary. */
export type DictionaryMetadata = {
  entries: number;
  hash: string;
  source?: string;
};

export const dictionaryMetadataSchema: Schema<DictionaryMetadata> = s.object<DictionaryMetadata>({
  entries: s.int(),
  hash: s.string(),
  source: s.optional(s.string()),
});
