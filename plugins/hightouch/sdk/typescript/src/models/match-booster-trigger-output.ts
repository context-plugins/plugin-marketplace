import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The output of a trigger action to run a Match Booster enrichment. */
export type MatchBoosterTriggerOutput = {
  /** The id of the triggered enrichment job. */
  id: string;
  /** The status of the triggered enrichment job. */
  status: string;
  /** Timestamp when the enrichment job was created. */
  createdAt: string;
};

export const matchBoosterTriggerOutputSchema: Schema<MatchBoosterTriggerOutput> =
  s.object<MatchBoosterTriggerOutput>({
    id: s.string(),
    status: s.string(),
    createdAt: s.string(),
  });
