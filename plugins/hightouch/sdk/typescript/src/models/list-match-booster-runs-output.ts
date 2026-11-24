import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchBoosterRunSchema, type MatchBoosterRun } from "./match-booster-run.js";

/** The output of a request to list Match Booster enrichment runs for a model. */
export type ListMatchBoosterRunsOutput = {
  data: MatchBoosterRun[];
  hasMore: boolean;
};

export const listMatchBoosterRunsOutputSchema: Schema<ListMatchBoosterRunsOutput> =
  s.object<ListMatchBoosterRunsOutput>({
    data: s.array(s.lazy(() => matchBoosterRunSchema)),
    hasMore: s.boolean(),
  });
