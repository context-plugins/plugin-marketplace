import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchCreate = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchCreateProperties: s.Shape<SearchCreate> = {
  store: s.string(),
  term: s.string(),
  country: s.defaulted(s.string(), "US"),
  lang: s.defaulted(s.string(), "en_US"),
  repeat: s.optional(s.int()),
  idUser: s.optional(s.string()),
  limit: s.defaulted(s.int(), 1),
  limitApps: s.optional(s.array(s.string())),
  _keysMap: {
    idUser: "id_user",
    limitApps: "limit_apps",
  },
};

export const searchCreateInternalSchema: Schema<SearchCreate> = s.object<SearchCreate>(
  searchCreateProperties,
  { additionalProperties: s.json() },
);

export const searchCreateSchema: Schema<SearchCreate> = s.lazySchema(() =>
  s.object<SearchCreate>(
    {
      ...searchCreateProperties,
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(250)), 1),
    },
    { additionalProperties: s.json() },
  ),
);
