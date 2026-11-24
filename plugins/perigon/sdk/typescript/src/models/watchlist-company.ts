import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Updated list of companies to include in the watchlist */
export type WatchlistCompany = {
  name?: string | null;
  description?: string | null;
  id?: string | null;
  domain?: string | null;
  aliases?: string[] | null;
  query?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistCompanySchema: Schema<WatchlistCompany> = s.object<WatchlistCompany>(
  {
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    id: s.optionalNullable(s.string()),
    domain: s.optionalNullable(s.string()),
    aliases: s.optionalNullable(s.array(s.string())),
    query: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
