import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DatasourceObjectTypeDocumentCountEntry = {
  /** The object type of the document */
  objectType?: string;
  /** The number of documents of the corresponding objectType */
  count?: number;
};

export const datasourceObjectTypeDocumentCountEntrySchema: Schema<DatasourceObjectTypeDocumentCountEntry> =
  s.object<DatasourceObjectTypeDocumentCountEntry>({
    objectType: s.optional(s.string()),
    count: s.optional(s.int()),
  });
