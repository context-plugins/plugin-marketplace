import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  countryGeographicAccessScopeInternalSchema,
  countryGeographicAccessScopeSchema,
  type CountryGeographicAccessScope,
} from "../country-geographic-access-scope.js";
import {
  customRegionGeographicAccessScopeInternalSchema,
  customRegionGeographicAccessScopeSchema,
  type CustomRegionGeographicAccessScope,
} from "../custom-region-geographic-access-scope.js";
import {
  globalGeographicAccessScopeSchema,
  type GlobalGeographicAccessScope,
} from "../global-geographic-access-scope.js";
import {
  unassignedGeographicAccessScopeSchema,
  type UnassignedGeographicAccessScope,
} from "../unassigned-geographic-access-scope.js";

export type GeographicAccessScope =
  | UnassignedGeographicAccessScope
  | GlobalGeographicAccessScope
  | CountryGeographicAccessScope
  | CustomRegionGeographicAccessScope;

export const geographicAccessScopeInternalSchema: Schema<GeographicAccessScope> = s.of<GeographicAccessScope>(
  s.union([
    s.lazy(() => unassignedGeographicAccessScopeSchema),
    s.lazy(() => globalGeographicAccessScopeSchema),
    s.lazy(() => countryGeographicAccessScopeInternalSchema),
    s.lazy(() => customRegionGeographicAccessScopeInternalSchema),
  ]),
);

export const geographicAccessScopeSchema: Schema<GeographicAccessScope> = s.lazySchema(() =>
  s.of<GeographicAccessScope>(
    s.union([
      s.lazy(() => unassignedGeographicAccessScopeSchema),
      s.lazy(() => globalGeographicAccessScopeSchema),
      s.lazy(() => countryGeographicAccessScopeSchema),
      s.lazy(() => customRegionGeographicAccessScopeSchema),
    ]),
  ),
);
