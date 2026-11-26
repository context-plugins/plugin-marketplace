import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  PatternAlphAiRestRadarApi,
  patternAlphAiRestRadarApiSchema,
} from "./pattern-alph-ai-rest-radar-api.js";
import { radarClusterFilingSchema, type RadarClusterFiling } from "./radar-cluster-filing.js";

export type RadarClusterContext = {
  windowStart: string;
  windowEnd: string;
  knownAt: Date;
  buyers: number;
  officerDirectorBuyers: number;
  /** @default PatternAlphAiRestRadarApi.OpenMarket */
  pattern?: PatternAlphAiRestRadarApi;
  filingsCount: number;
  evidence: RadarClusterFiling[];
  evidenceTruncated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarClusterContextSchema: Schema<RadarClusterContext> = s.object<RadarClusterContext>(
  {
    windowStart: s.dateOnly(),
    windowEnd: s.dateOnly(),
    knownAt: s.dateTime(),
    buyers: s.int(),
    officerDirectorBuyers: s.int(),
    pattern: s.defaulted(patternAlphAiRestRadarApiSchema, PatternAlphAiRestRadarApi.OpenMarket),
    filingsCount: s.int(),
    evidence: s.array(s.lazy(() => radarClusterFilingSchema)),
    evidenceTruncated: s.boolean(),
    _keysMap: {
      windowStart: "window_start",
      windowEnd: "window_end",
      knownAt: "known_at",
      officerDirectorBuyers: "officer_director_buyers",
      filingsCount: "filings_count",
      evidenceTruncated: "evidence_truncated",
    },
  },
  { additionalProperties: s.json() },
);
