import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";
import { personSchema, type Person } from "./person.js";

export type PinDocument = {
  /** The query strings for which the pinned result will show. */
  queries?: string[];
  /**
   * Filters which restrict who should see the pinned document. Values are taken from the
   * corresponding filters in people search.
   */
  audienceFilters?: FacetFilter[];
  /** The opaque id of the pin. */
  id?: string;
  /** The document which should be a pinned result. */
  documentId: string;
  attribution?: Person;
  updatedBy?: Person;
  createTime?: Date;
  updateTime?: Date;
  favoriteInfo?: FavoriteInfo;
};

export const pinDocumentSchema: Schema<PinDocument> = s.object<PinDocument>({
  queries: s.optional(s.array(s.string())),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  id: s.optional(s.string()),
  documentId: s.string(),
  attribution: s.optional(s.lazy(() => personSchema)),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  createTime: s.optional(s.dateTime()),
  updateTime: s.optional(s.dateTime()),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
});
