import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeAlphAiRestRadarApi = {
  HistoricalPreview: "historical_preview",
  Live: "live",
} as const;
export type ModeAlphAiRestRadarApi =
  | (typeof ModeAlphAiRestRadarApi)[keyof typeof ModeAlphAiRestRadarApi]
  | (string & {});

export const modeAlphAiRestRadarApiSchema: EnumSchema<ModeAlphAiRestRadarApi> =
  s.enumOf<ModeAlphAiRestRadarApi>(ModeAlphAiRestRadarApi);
