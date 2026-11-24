import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterOptionsSchema, type FilterOptions } from "./filter-options.js";

export type ApiSignalsFiltersResponse = {
  signals?: string[];
  objectType?: string;
  /** Available enum values for signal sub-filters. Only present in the `company` response. */
  filterOptions?: FilterOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiSignalsFiltersResponseSchema: Schema<ApiSignalsFiltersResponse> =
  s.object<ApiSignalsFiltersResponse>(
    {
      signals: s.optional(s.array(s.string())),
      objectType: s.optional(s.string()),
      filterOptions: s.optional(s.lazy(() => filterOptionsSchema)),
    },
    { additionalProperties: s.json() },
  );
