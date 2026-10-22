import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteCollectionRequest = {
  /** The IDs of the Collections to delete. */
  ids: number[];
  /** The datasource allowed in the Collection to be deleted. */
  allowedDatasource?: string;
};

export const deleteCollectionRequestSchema: Schema<DeleteCollectionRequest> =
  s.object<DeleteCollectionRequest>({
    ids: s.array(s.int()),
    allowedDatasource: s.optional(s.string()),
  });
