import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3CompanyProspectingFiltersInternalSchema,
  v3CompanyProspectingFiltersSchema,
  type V3CompanyProspectingFilters,
} from "./v3-company-prospecting-filters.js";

export type Companies1 = {
  include: V3CompanyProspectingFilters;
  exclude?: V3CompanyProspectingFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companies1Properties: s.Shape<Companies1> = {
  include: v3CompanyProspectingFiltersInternalSchema,
  exclude: s.optional(s.lazy(() => v3CompanyProspectingFiltersInternalSchema)),
};

export const companies1InternalSchema: Schema<Companies1> = s.object<Companies1>(companies1Properties, {
  additionalProperties: s.json(),
});

export const companies1Schema: Schema<Companies1> = s.lazySchema(() =>
  s.object<Companies1>(
    {
      ...companies1Properties,
      include: v3CompanyProspectingFiltersSchema,
      exclude: s.optional(s.lazy(() => v3CompanyProspectingFiltersSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
