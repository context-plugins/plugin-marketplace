import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idrRunStatsSchema, type IdrRunStats } from "./idr-run-stats.js";

/** If available, the stats at the end of a successful run. */
export type IdrRunStatsByThreshold2 = {
  probabilisticLoose?: IdrRunStats;
  probabilisticStrict?: IdrRunStats;
  deterministic?: IdrRunStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, IdrRunStats>;
};

export const idrRunStatsByThreshold2Schema: Schema<IdrRunStatsByThreshold2> =
  s.object<IdrRunStatsByThreshold2>(
    {
      probabilisticLoose: s.optional(s.lazy(() => idrRunStatsSchema)),
      probabilisticStrict: s.optional(s.lazy(() => idrRunStatsSchema)),
      deterministic: s.optional(s.lazy(() => idrRunStatsSchema)),
      _keysMap: {
        probabilisticLoose: "probabilistic-loose",
        probabilisticStrict: "probabilistic-strict",
      },
    },
    { additionalProperties: idrRunStatsSchema },
  );
