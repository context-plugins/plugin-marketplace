import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { devSortEnumSchema, type DevSortEnum } from "./dev-sort-enum.js";
import { searchFilterDevIosSchema, type SearchFilterDevIos } from "./search-filter-dev-ios.js";

export type IosDevSearchBody = {
  /** Count of developers in results @default 10 */
  limit?: number;
  /** Offset page @default 1 */
  page?: number;
  /** Field for sort, prefix with - for descending */
  sort?: DevSortEnum;
  /** Fields for select, empty for all */
  fields?: string[];
  filter: SearchFilterDevIos;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosDevSearchBodySchema: Schema<IosDevSearchBody> = s.object<IosDevSearchBody>(
  {
    limit: s.defaulted(s.int(), 10),
    page: s.defaulted(s.int(), 1),
    sort: s.optional(s.lazy(() => devSortEnumSchema)),
    fields: s.optional(s.array(s.string())),
    filter: searchFilterDevIosSchema,
  },
  { additionalProperties: s.json() },
);
