import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { devSortEnumSchema, type DevSortEnum } from "./dev-sort-enum.js";
import { searchFilterDevPlaySchema, type SearchFilterDevPlay } from "./search-filter-dev-play.js";

export type PlayDevSearchBody = {
  /** Count of developers in results @default 10 */
  limit?: number;
  /** Offset page @default 1 */
  page?: number;
  /** Field for sort, prefix with - for descending */
  sort?: DevSortEnum;
  /** Fields for select, empty for all */
  fields?: string[];
  filter: SearchFilterDevPlay;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playDevSearchBodySchema: Schema<PlayDevSearchBody> = s.object<PlayDevSearchBody>(
  {
    limit: s.defaulted(s.int(), 10),
    page: s.defaulted(s.int(), 1),
    sort: s.optional(s.lazy(() => devSortEnumSchema)),
    fields: s.optional(s.array(s.string())),
    filter: searchFilterDevPlaySchema,
  },
  { additionalProperties: s.json() },
);
