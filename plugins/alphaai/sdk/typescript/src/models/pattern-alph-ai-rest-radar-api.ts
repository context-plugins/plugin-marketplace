import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PatternAlphAiRestRadarApi = {
  OpenMarket: "open_market",
} as const;
export type PatternAlphAiRestRadarApi =
  | (typeof PatternAlphAiRestRadarApi)[keyof typeof PatternAlphAiRestRadarApi]
  | (string & {});

export const patternAlphAiRestRadarApiSchema: EnumSchema<PatternAlphAiRestRadarApi> =
  s.enumOf<PatternAlphAiRestRadarApi>(PatternAlphAiRestRadarApi);
