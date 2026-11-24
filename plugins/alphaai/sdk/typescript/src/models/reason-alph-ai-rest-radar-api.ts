import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonAlphAiRestRadarApi = {
  Disabled: "disabled",
  Missing: "missing",
  Stale: "stale",
  Future: "future",
  Invalid: "invalid",
  ReadFailed: "read_failed",
} as const;
export type ReasonAlphAiRestRadarApi =
  | (typeof ReasonAlphAiRestRadarApi)[keyof typeof ReasonAlphAiRestRadarApi]
  | (string & {});

export const reasonAlphAiRestRadarApiSchema: EnumSchema<ReasonAlphAiRestRadarApi> =
  s.enumOf<ReasonAlphAiRestRadarApi>(ReasonAlphAiRestRadarApi);
