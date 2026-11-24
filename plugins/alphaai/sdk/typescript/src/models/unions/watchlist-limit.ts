import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WatchlistLimit = number;

export const watchlistLimitSchema: Schema<WatchlistLimit> = s.of<WatchlistLimit>(s.union([s.int()]));
