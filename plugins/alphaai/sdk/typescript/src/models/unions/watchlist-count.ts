import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WatchlistCount = number;

export const watchlistCountSchema: Schema<WatchlistCount> = s.of<WatchlistCount>(s.union([s.int()]));
