import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShortcutsPaginationMetadata = {
  /** Cursor indicates the start of the next page of results */
  cursor?: string;
  hasNextPage?: boolean;
  totalItemCount?: number;
};

export const shortcutsPaginationMetadataSchema: Schema<ShortcutsPaginationMetadata> =
  s.object<ShortcutsPaginationMetadata>({
    cursor: s.optional(s.string()),
    hasNextPage: s.optional(s.boolean()),
    totalItemCount: s.optional(s.int()),
  });
