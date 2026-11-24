import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WatchlistSummary = {
  /** Unique watchlist identifier */
  id: string;
  /** User-defined watchlist name */
  name: string;
  /** Display order (lower values appear first) */
  position: number;
  /** Number of companies in the watchlist */
  companyCount: number;
  /** When the watchlist was created */
  createdAt?: Date;
  /** When the watchlist was last modified */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistSummarySchema: Schema<WatchlistSummary> = s.object<WatchlistSummary>(
  {
    id: s.string(),
    name: s.string(),
    position: s.int(),
    companyCount: s.int(),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      companyCount: "company_count",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
