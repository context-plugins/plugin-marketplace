import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IdrRunStats = {
  /** The exact number of rows processed from sources in this run. */
  numSourceRows: number;
  /** The exact number of unique profiles in the graph created during this run. */
  numNewUniqueProfiles: number;
  /** The exact number of unique profiles in the graph at the end of the run. */
  numUniqueProfiles: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idrRunStatsSchema: Schema<IdrRunStats> = s.object<IdrRunStats>(
  {
    numSourceRows: s.float64(),
    numNewUniqueProfiles: s.float64(),
    numUniqueProfiles: s.float64(),
  },
  { additionalProperties: s.json() },
);
