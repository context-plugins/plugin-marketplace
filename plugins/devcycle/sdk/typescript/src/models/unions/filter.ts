import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { allFilterSchema, type AllFilter } from "../all-filter.js";
import { userAppVersionFilterSchema, type UserAppVersionFilter } from "../user-app-version-filter.js";
import { userCountryFilterSchema, type UserCountryFilter } from "../user-country-filter.js";
import {
  userCustomFilterInternalSchema,
  userCustomFilterSchema,
  type UserCustomFilter,
} from "../user-custom-filter.js";
import { userFilterSchema, type UserFilter } from "../user-filter.js";
import {
  userPlatformVersionFilterSchema,
  type UserPlatformVersionFilter,
} from "../user-platform-version-filter.js";

export type Filter =
  | AllFilter
  | UserFilter
  | UserCountryFilter
  | UserAppVersionFilter
  | UserPlatformVersionFilter
  | UserCustomFilter;

export const filterInternalSchema: Schema<Filter> = s.of<Filter>(
  s.union([
    s.lazy(() => allFilterSchema),
    s.lazy(() => userFilterSchema),
    s.lazy(() => userCountryFilterSchema),
    s.lazy(() => userAppVersionFilterSchema),
    s.lazy(() => userPlatformVersionFilterSchema),
    s.lazy(() => userCustomFilterInternalSchema),
  ]),
);

export const filterSchema: Schema<Filter> = s.lazySchema(() =>
  s.of<Filter>(
    s.union([
      s.lazy(() => allFilterSchema),
      s.lazy(() => userFilterSchema),
      s.lazy(() => userCountryFilterSchema),
      s.lazy(() => userAppVersionFilterSchema),
      s.lazy(() => userPlatformVersionFilterSchema),
      s.lazy(() => userCustomFilterSchema),
    ]),
  ),
);
