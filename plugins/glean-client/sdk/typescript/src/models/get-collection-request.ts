import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetCollectionRequest = {
  /** The ID of the Collection to be retrieved. */
  id: number;
  /**
   * Whether or not to include the Collection Items in this Collection. Only request if absolutely
   * required, as this is expensive.
   */
  withItems?: boolean;
  /** Whether or not to include the top level Collection in this Collection's hierarchy. */
  withHierarchy?: boolean;
  /** The datasource allowed in the Collection returned. */
  allowedDatasource?: string;
};

export const getCollectionRequestSchema: Schema<GetCollectionRequest> = s.object<GetCollectionRequest>({
  id: s.int(),
  withItems: s.optional(s.boolean()),
  withHierarchy: s.optional(s.boolean()),
  allowedDatasource: s.optional(s.string()),
});
