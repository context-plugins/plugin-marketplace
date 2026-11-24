import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A completed Match Booster enrichment run. */
export type MatchBoosterRun = {
  /** The id of the enrichment run. */
  id: string;
  status: string;
  /** The Match Booster region the enrichment ran in. */
  region: string;
  /** If available, the error associated with a failed run. */
  error: string | null;
  /** The number of rows enriched during the run. */
  enrichedRows: number | null;
  /** Whether the run enriched all rows or only new/changed rows. */
  isFullEnrichment: boolean | null;
  /** The duration of the enrichment in milliseconds. */
  durationMs: number | null;
  /** Timestamp of the run's completion. */
  enrichedAt: Date;
};

export const matchBoosterRunSchema: Schema<MatchBoosterRun> = s.object<MatchBoosterRun>({
  id: s.string(),
  status: s.string(),
  region: s.string(),
  error: s.nullable(s.string()),
  enrichedRows: s.nullable(s.float64()),
  isFullEnrichment: s.nullable(s.boolean()),
  durationMs: s.nullable(s.float64()),
  enrichedAt: s.dateTime(),
});
