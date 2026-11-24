import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchlistCompanyDtoSchema, type WatchlistCompanyDto } from "./watchlist-company-dto.js";
import { watchlistPersonDtoSchema, type WatchlistPersonDto } from "./watchlist-person-dto.js";

/** Watchlist of people and companies for use with monitors. */
export type WatchlistDto = {
  /** Numeric identifier for the watchlist. */
  id?: number | null;
  /** Date and time the watchlist was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the watchlist was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Unique slug name for the watchlist. */
  name?: string | null;
  /** Human-readable display name. */
  displayName?: string | null;
  /** Optional description of the watchlist. */
  description?: string | null;
  /** People included in the watchlist. */
  people?: WatchlistPersonDto[] | null;
  /** Companies included in the watchlist. */
  companies?: WatchlistCompanyDto[] | null;
  /** Owning organization ID when the watchlist is private. */
  organizationId?: number | null;
  /** Whether the watchlist is publicly visible. */
  visible?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistDtoSchema: Schema<WatchlistDto> = s.object<WatchlistDto>(
  {
    id: s.optionalNullable(s.int()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    name: s.optionalNullable(s.string()),
    displayName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    people: s.optionalNullable(s.array(s.lazy(() => watchlistPersonDtoSchema))),
    companies: s.optionalNullable(s.array(s.lazy(() => watchlistCompanyDtoSchema))),
    organizationId: s.optionalNullable(s.int()),
    visible: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
