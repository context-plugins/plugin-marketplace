import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  countryGeographicAccessScopeRequestInternalSchema,
  countryGeographicAccessScopeRequestSchema,
  type CountryGeographicAccessScopeRequest,
} from "../country-geographic-access-scope-request.js";
import {
  customRegionGeographicAccessScopeInternalSchema,
  customRegionGeographicAccessScopeSchema,
  type CustomRegionGeographicAccessScope,
} from "../custom-region-geographic-access-scope.js";
import {
  globalGeographicAccessScopeSchema,
  type GlobalGeographicAccessScope,
} from "../global-geographic-access-scope.js";

export type UpdateGeographicAccessScopeRequest =
  | GlobalGeographicAccessScope
  | CountryGeographicAccessScopeRequest
  | CustomRegionGeographicAccessScope;

export const updateGeographicAccessScopeRequestInternalSchema: Schema<UpdateGeographicAccessScopeRequest> =
  s.of<UpdateGeographicAccessScopeRequest>(
    s.union([
      s.lazy(() => globalGeographicAccessScopeSchema),
      s.lazy(() => countryGeographicAccessScopeRequestInternalSchema),
      s.lazy(() => customRegionGeographicAccessScopeInternalSchema),
    ]),
  );

export const updateGeographicAccessScopeRequestSchema: Schema<UpdateGeographicAccessScopeRequest> =
  s.lazySchema(() =>
    s.of<UpdateGeographicAccessScopeRequest>(
      s.union([
        s.lazy(() => globalGeographicAccessScopeSchema),
        s.lazy(() => countryGeographicAccessScopeRequestSchema),
        s.lazy(() => customRegionGeographicAccessScopeSchema),
      ]),
    ),
  );
