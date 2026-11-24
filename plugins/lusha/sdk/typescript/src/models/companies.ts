import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3CompanyFilterCriteriaInternalSchema,
  v3CompanyFilterCriteriaSchema,
  type V3CompanyFilterCriteria,
} from "./v3-company-filter-criteria.js";

export type Companies = {
  include?: V3CompanyFilterCriteria;
  exclude?: V3CompanyFilterCriteria;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesProperties: s.Shape<Companies> = {
  include: s.optional(s.lazy(() => v3CompanyFilterCriteriaInternalSchema)),
  exclude: s.optional(s.lazy(() => v3CompanyFilterCriteriaInternalSchema)),
};

export const companiesInternalSchema: Schema<Companies> = s.object<Companies>(companiesProperties, {
  additionalProperties: s.json(),
});

export const companiesSchema: Schema<Companies> = s.lazySchema(() =>
  s.object<Companies>(
    {
      ...companiesProperties,
      include: s.optional(s.lazy(() => v3CompanyFilterCriteriaSchema)),
      exclude: s.optional(s.lazy(() => v3CompanyFilterCriteriaSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
