import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceObjectTypeDocumentCountEntrySchema,
  type DatasourceObjectTypeDocumentCountEntry,
} from "./datasource-object-type-document-count-entry.js";

export type Counts = {
  /**
   * A list of object types and corresponding upload counts. Note: This data may be cached and could
   * be up to 3 hours stale.
   */
  uploaded?: DatasourceObjectTypeDocumentCountEntry[];
  /** The number of documents indexed, grouped by objectType */
  indexed?: DatasourceObjectTypeDocumentCountEntry[];
};

export const countsSchema: Schema<Counts> = s.object<Counts>({
  uploaded: s.optional(s.array(s.lazy(() => datasourceObjectTypeDocumentCountEntrySchema))),
  indexed: s.optional(s.array(s.lazy(() => datasourceObjectTypeDocumentCountEntrySchema))),
});
