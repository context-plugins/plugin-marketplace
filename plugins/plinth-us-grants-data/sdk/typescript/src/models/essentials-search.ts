import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./unions/filters.js";
import { fromSchema, type From } from "./unions/from.js";
import { mode1Schema, type Mode1 } from "./unions/mode1.js";
import { searchTermsSchema, type SearchTerms } from "./unions/search-terms.js";
import { sizeSchema, type Size } from "./unions/size.js";
import { sortSchema, type Sort } from "./unions/sort.js";
import {
  strictPlinthUsGrantsDataOrganizationsApiSchema,
  type StrictPlinthUsGrantsDataOrganizationsApi,
} from "./unions/strict-plinth-us-grants-data-organizations-api.js";

/**
 * Candid Essentials v4 speaks POST-with-a-body, and that is the shape a migrating client already
 * builds. `search_terms`, `from`, `size`, `filters` and `sort` therefore keep their Candid names
 * and meanings; the FILTER VOCABULARY inside `filters` is ours, because Candid's is built on PCS
 * and on profile data we do not hold (see config/candid-compat.json → essentialsFilters).
 *
 * `filters` is a free-form object rather than a nested model on purpose: an unknown filter key is
 * REPORTED in x_plinth.warnings, and a strict schema would instead 422 the whole request and tell
 * the caller nothing about which of their filters we understood.
 */
export type EssentialsSearch = {
  /** Organization name or keyword. */
  searchTerms?: SearchTerms;
  /** 0-based offset, as Candid. */
  from?: From;
  /** Page size. Default 25, capped at 1000 (Candid's ceiling is 25). */
  size?: Size;
  /**
   * text (default) | semantic. `semantic` matches on mission meaning rather than name, where the
   * embedding store is staged.
   */
  mode?: Mode1;
  /** See the Essentials filter matrix. Unknown keys are reported, not ignored. */
  filters?: Filters;
  /**
   * {"field": "total_revenue", "order": "desc"} — or the field name alone. Sortable: total_revenue,
   * total_expenses, net_assets, grants_paid, name.
   */
  sort?: Sort;
  /** Reject the request if any filter could not be honored. */
  strict?: StrictPlinthUsGrantsDataOrganizationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const essentialsSearchSchema: Schema<EssentialsSearch> = s.object<EssentialsSearch>(
  {
    searchTerms: s.optional(s.lazy(() => searchTermsSchema)),
    from: s.optional(s.lazy(() => fromSchema)),
    size: s.optional(s.lazy(() => sizeSchema)),
    mode: s.optional(s.lazy(() => mode1Schema)),
    filters: s.optional(s.lazy(() => filtersSchema)),
    sort: s.optional(s.lazy(() => sortSchema)),
    strict: s.optional(s.lazy(() => strictPlinthUsGrantsDataOrganizationsApiSchema)),
    _keysMap: {
      searchTerms: "search_terms",
    },
  },
  { additionalProperties: s.json() },
);
