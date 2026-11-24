import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** People included in the watchlist. */
export type WatchlistPersonDto = {
  name?: string | null;
  description?: string | null;
  wikidataId?: string | null;
  aliases?: string[] | null;
  query?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistPersonDtoSchema: Schema<WatchlistPersonDto> = s.object<WatchlistPersonDto>(
  {
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    wikidataId: s.optionalNullable(s.string()),
    aliases: s.optionalNullable(s.array(s.string())),
    query: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
