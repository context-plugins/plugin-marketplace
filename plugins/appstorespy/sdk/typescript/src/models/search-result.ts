import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterSchema, type Cluster } from "./cluster.js";

export type SearchResult = {
  store: string;
  term: string;
  /** @default "US" */
  country?: string;
  /** @default "en_US" */
  lang?: string;
  repeat?: number;
  idUser?: string;
  /** @default 1 */
  limit?: number;
  limitApps?: string[];
  crawled?: Date;
  id: string;
  results?: Cluster[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchResultProperties: s.Shape<SearchResult> = {
  store: s.string(),
  term: s.string(),
  country: s.defaulted(s.string(), "US"),
  lang: s.defaulted(s.string(), "en_US"),
  repeat: s.optional(s.int()),
  idUser: s.optional(s.string()),
  limit: s.defaulted(s.int(), 1),
  limitApps: s.optional(s.array(s.string())),
  crawled: s.optional(s.dateTime()),
  id: s.string(),
  results: s.optional(s.array(s.lazy(() => clusterSchema))),
  _keysMap: {
    idUser: "id_user",
    limitApps: "limit_apps",
  },
};

export const searchResultInternalSchema: Schema<SearchResult> = s.object<SearchResult>(
  searchResultProperties,
  { additionalProperties: s.json() },
);

export const searchResultSchema: Schema<SearchResult> = s.lazySchema(() =>
  s.object<SearchResult>(
    {
      ...searchResultProperties,
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(250)), 1),
    },
    { additionalProperties: s.json() },
  ),
);
