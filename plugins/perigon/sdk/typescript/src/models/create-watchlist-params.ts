import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistCompanySchema, type WatchlistCompany } from "./watchlist-company.js";
import { watchlistPersonSchema, type WatchlistPerson } from "./watchlist-person.js";

export type CreateWatchlistParams = {
  /** Unique name for the watchlist within the organization */
  name: string;
  /** Display name for the watchlist */
  displayName?: string | null;
  /** Description of the watchlist */
  description?: string | null;
  /** List of people to include in the watchlist */
  people: WatchlistPerson[];
  /** List of companies to include in the watchlist */
  companies: WatchlistCompany[];
  /** Whether the watchlist is visible in the UI @default true */
  visible?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createWatchlistParamsProperties: s.Shape<CreateWatchlistParams> = {
  name: s.string(),
  displayName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  people: s.array(s.lazy(() => watchlistPersonSchema)),
  companies: s.array(s.lazy(() => watchlistCompanySchema)),
  visible: s.defaulted(s.nullable(s.boolean()), true),
};

export const createWatchlistParamsInternalSchema: Schema<CreateWatchlistParams> =
  s.object<CreateWatchlistParams>(createWatchlistParamsProperties, { additionalProperties: s.json() });

export const createWatchlistParamsSchema: Schema<CreateWatchlistParams> = s.lazySchema(() =>
  s.object<CreateWatchlistParams>(
    {
      ...createWatchlistParamsProperties,
      people: s.array(s.lazy(() => watchlistPersonSchema)).check(s.minLength(0), s.maxLength(100)),
      companies: s.array(s.lazy(() => watchlistCompanySchema)).check(s.minLength(0), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
