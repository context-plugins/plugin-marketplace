import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsiderClustersMeta = {
  /** When the underlying computation ran (the list is refreshed every few minutes). */
  asOf: Date;
  /** Earliest purchase date on record; nothing before it can appear. */
  coverageSince: string | null;
  episodeGapDays: number;
  episodeMaxDays: number;
  researchOnly: boolean;
  pointInTime: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderClustersMetaSchema: Schema<InsiderClustersMeta> = s.object<InsiderClustersMeta>(
  {
    asOf: s.dateTime(),
    coverageSince: s.nullable(s.dateOnly()),
    episodeGapDays: s.int(),
    episodeMaxDays: s.int(),
    researchOnly: s.boolean(),
    pointInTime: s.boolean(),
    _keysMap: {
      asOf: "as_of",
      coverageSince: "coverage_since",
      episodeGapDays: "episode_gap_days",
      episodeMaxDays: "episode_max_days",
      researchOnly: "research_only",
      pointInTime: "point_in_time",
    },
  },
  { additionalProperties: s.json() },
);
