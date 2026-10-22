import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The parent folder identifier and optional descendant filter. */
export type FolderDescendantsRequest = {
  /** The immutable identifier of the parent folder whose descendants are returned. */
  id: string;
  /** A list of folder identifiers to restrict the returned descendants to. */
  filterIds?: string[];
  /**
   * Whether to include the parent folder itself in the results. If false, only descendants are
   * returned.
   */
  inclusive?: boolean;
};

export const folderDescendantsRequestSchema: Schema<FolderDescendantsRequest> =
  s.object<FolderDescendantsRequest>({
    id: s.string(),
    filterIds: s.optional(s.array(s.string())),
    inclusive: s.optional(s.boolean()),
    _keysMap: {
      filterIds: "filter_ids",
    },
  });
