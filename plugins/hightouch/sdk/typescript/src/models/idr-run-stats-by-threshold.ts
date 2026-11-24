import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idrRunStatsSchema, type IdrRunStats } from "./idr-run-stats.js";

export type IdrRunStatsByThreshold = {
  probabilisticLoose?: IdrRunStats;
  probabilisticStrict?: IdrRunStats;
  deterministic?: IdrRunStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, IdrRunStats>;
};

export const idrRunStatsByThresholdSchema: Schema<IdrRunStatsByThreshold> = s.object<IdrRunStatsByThreshold>(
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
