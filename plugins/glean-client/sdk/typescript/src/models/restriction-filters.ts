import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";

export type RestrictionFilters = {
  /**
   * Specifications for containers that should be used as part of the restriction (include/exclude).
   * Memberships are recursively defined for a subset of datasources (currently: SharePoint,
   * OneDrive, Google Drive, and Confluence). Please contact the Glean team to enable this for more
   * datasources. Recursive memberships do not apply for Collections.
   */
  containerSpecs?: DocumentSpec4[];
};

export const restrictionFiltersSchema: Schema<RestrictionFilters> = s.object<RestrictionFilters>({
  containerSpecs: s.optional(s.array(s.lazy(() => documentSpec4Schema))),
});
