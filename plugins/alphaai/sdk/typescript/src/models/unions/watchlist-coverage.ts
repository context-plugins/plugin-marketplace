import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { radarWatchlistCoverageSchema, type RadarWatchlistCoverage } from "../radar-watchlist-coverage.js";

export type WatchlistCoverage = RadarWatchlistCoverage;

export const watchlistCoverageSchema: Schema<WatchlistCoverage> = s.of<WatchlistCoverage>(
  s.union([s.lazy(() => radarWatchlistCoverageSchema)]),
);
