import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  coverageAlphAiRestRadarApiSchema,
  type CoverageAlphAiRestRadarApi,
} from "./unions/coverage-alph-ai-rest-radar-api.js";
import { reason2Schema, type Reason2 } from "./unions/reason2.js";
import { valueSchema, type Value } from "./unions/value.js";

export type RadarSentiment = {
  value: Value;
  usableStories: number;
  coverage: CoverageAlphAiRestRadarApi;
  reason: Reason2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarSentimentSchema: Schema<RadarSentiment> = s.object<RadarSentiment>(
  {
    value: valueSchema,
    usableStories: s.int(),
    coverage: coverageAlphAiRestRadarApiSchema,
    reason: reason2Schema,
    _keysMap: {
      usableStories: "usable_stories",
    },
  },
  { additionalProperties: s.json() },
);
