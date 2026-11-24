import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { AppCountries, appCountriesSchema } from "./app-countries.js";
import { appLanguagesSchema, type AppLanguages } from "./app-languages.js";
import { iosSortEnumSchema, type IosSortEnum } from "./ios-sort-enum.js";
import { searchFilterIosSchema, type SearchFilterIos } from "./search-filter-ios.js";

export type IosAppSearchBody = {
  /** Count of apps in results @default 10 */
  limit?: number;
  /** Offset page @default 1 */
  page?: number;
  /** Field for sort */
  sort?: IosSortEnum;
  /** Fields for select, empty for all */
  fields?: string[];
  /** Country for which return data @default AppCountries.Us */
  country?: AppCountries;
  /** Language of meta data. By default: en_US */
  language?: AppLanguages;
  filter: SearchFilterIos;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosAppSearchBodySchema: Schema<IosAppSearchBody> = s.object<IosAppSearchBody>(
  {
    limit: s.defaulted(s.int(), 10),
    page: s.defaulted(s.int(), 1),
    sort: s.optional(s.lazy(() => iosSortEnumSchema)),
    fields: s.optional(s.array(s.string())),
    country: s.defaulted(appCountriesSchema, AppCountries.Us),
    language: s.optional(s.lazy(() => appLanguagesSchema)),
    filter: searchFilterIosSchema,
  },
  { additionalProperties: s.json() },
);
