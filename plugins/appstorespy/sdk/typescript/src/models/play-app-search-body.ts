import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { AppCountries, appCountriesSchema } from "./app-countries.js";
import { appLanguagesSchema, type AppLanguages } from "./app-languages.js";
import { playSortEnumSchema, type PlaySortEnum } from "./play-sort-enum.js";
import { searchFilterPlaySchema, type SearchFilterPlay } from "./search-filter-play.js";

export type PlayAppSearchBody = {
  /** Count of apps in results @default 10 */
  limit?: number;
  /** Offset page @default 1 */
  page?: number;
  /** Field for sort */
  sort?: PlaySortEnum;
  /** Fields for select, empty for all */
  fields?: string[];
  /** Country for which return data @default AppCountries.Us */
  country?: AppCountries;
  /** Language of meta data. By default: en_US */
  language?: AppLanguages;
  filter: SearchFilterPlay;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppSearchBodySchema: Schema<PlayAppSearchBody> = s.object<PlayAppSearchBody>(
  {
    limit: s.defaulted(s.int(), 10),
    page: s.defaulted(s.int(), 1),
    sort: s.optional(s.lazy(() => playSortEnumSchema)),
    fields: s.optional(s.array(s.string())),
    country: s.defaulted(appCountriesSchema, AppCountries.Us),
    language: s.optional(s.lazy(() => appLanguagesSchema)),
    filter: searchFilterPlaySchema,
  },
  { additionalProperties: s.json() },
);
