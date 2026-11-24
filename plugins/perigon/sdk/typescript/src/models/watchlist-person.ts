import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Updated list of people to include in the watchlist */
export type WatchlistPerson = {
  name?: string | null;
  description?: string | null;
  aliases?: string[] | null;
  wikidataId?: string | null;
  query?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistPersonSchema: Schema<WatchlistPerson> = s.object<WatchlistPerson>(
  {
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    aliases: s.optionalNullable(s.array(s.string())),
    wikidataId: s.optionalNullable(s.string()),
    query: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
