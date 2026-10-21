import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetResultSchema, type FacetResult } from "./facet-result.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";
import {
  shortcutsPaginationMetadataSchema,
  type ShortcutsPaginationMetadata,
} from "./shortcuts-pagination-metadata.js";

export type ListShortcutsPaginatedResponse = {
  /** List of all shortcuts accessible to the user */
  shortcuts: Shortcut[];
  facetResults?: FacetResult[];
  meta: ShortcutsPaginationMetadata;
};

export const listShortcutsPaginatedResponseSchema: Schema<ListShortcutsPaginatedResponse> =
  s.object<ListShortcutsPaginatedResponse>({
    shortcuts: s.array(s.lazy(() => shortcutSchema)),
    facetResults: s.optional(s.array(s.lazy(() => facetResultSchema))),
    meta: shortcutsPaginationMetadataSchema,
  });
