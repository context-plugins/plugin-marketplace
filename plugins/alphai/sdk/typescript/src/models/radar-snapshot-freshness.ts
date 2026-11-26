import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ModeAlphAiRestRadarApi, modeAlphAiRestRadarApiSchema } from "./mode-alph-ai-rest-radar-api.js";
import { generatedAtSchema, type GeneratedAt } from "./unions/generated-at.js";
import { sourceCheckedAtSchema, type SourceCheckedAt } from "./unions/source-checked-at.js";
import { sourceWatermarkSchema, type SourceWatermark } from "./unions/source-watermark.js";
import { unavailableReasonSchema, type UnavailableReason } from "./unions/unavailable-reason.js";

export type RadarSnapshotFreshness = {
  /** @default ModeAlphAiRestRadarApi.HistoricalPreview */
  mode?: ModeAlphAiRestRadarApi;
  effectiveDelaySeconds: number;
  generatedAt?: GeneratedAt;
  sourceWatermark?: SourceWatermark;
  sourceCheckedAt?: SourceCheckedAt;
  unavailableReason?: UnavailableReason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarSnapshotFreshnessSchema: Schema<RadarSnapshotFreshness> = s.object<RadarSnapshotFreshness>(
  {
    mode: s.defaulted(modeAlphAiRestRadarApiSchema, ModeAlphAiRestRadarApi.HistoricalPreview),
    effectiveDelaySeconds: s.int(),
    generatedAt: s.optional(s.lazy(() => generatedAtSchema)),
    sourceWatermark: s.optional(s.lazy(() => sourceWatermarkSchema)),
    sourceCheckedAt: s.optional(s.lazy(() => sourceCheckedAtSchema)),
    unavailableReason: s.optional(s.lazy(() => unavailableReasonSchema)),
    _keysMap: {
      effectiveDelaySeconds: "effective_delay_seconds",
      generatedAt: "generated_at",
      sourceWatermark: "source_watermark",
      sourceCheckedAt: "source_checked_at",
      unavailableReason: "unavailable_reason",
    },
  },
  { additionalProperties: s.json() },
);
