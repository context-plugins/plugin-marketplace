import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistCompanySchema, type WatchlistCompany } from "./watchlist-company.js";
import { watchlistPersonSchema, type WatchlistPerson } from "./watchlist-person.js";

export type UpdateWatchlistParams = {
  /** New name for the watchlist */
  name?: string | null;
  /** New display name for the watchlist */
  displayName?: string | null;
  /** New description for the watchlist */
  description?: string | null;
  /** Updated list of people to include in the watchlist */
  people?: WatchlistPerson[] | null;
  /** Updated list of companies to include in the watchlist */
  companies?: WatchlistCompany[] | null;
  /** Whether the watchlist is visible in the UI */
  visible?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateWatchlistParamsSchema: Schema<UpdateWatchlistParams> = s.object<UpdateWatchlistParams>(
  {
    name: s.optionalNullable(s.string()),
    displayName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    people: s.optionalNullable(s.array(s.lazy(() => watchlistPersonSchema))),
    companies: s.optionalNullable(s.array(s.lazy(() => watchlistCompanySchema))),
    visible: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
