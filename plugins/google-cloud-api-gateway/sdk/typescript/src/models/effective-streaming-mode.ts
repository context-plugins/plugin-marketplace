import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The streaming mode this gateway is actually served with, which the service resolves
 * at creation from `streaming_mode`, the referenced API Config, and the platform default at the
 * time. Read this rather than `streaming_mode` to determine whether a gateway supports streaming.
 */
export const EffectiveStreamingMode = {
  EffectiveStreamingModeUnspecified: "EFFECTIVE_STREAMING_MODE_UNSPECIFIED",
  EffectiveStreamingModeDisabled: "EFFECTIVE_STREAMING_MODE_DISABLED",
  EffectiveStreamingModeEnabled: "EFFECTIVE_STREAMING_MODE_ENABLED",
} as const;
export type EffectiveStreamingMode =
  | (typeof EffectiveStreamingMode)[keyof typeof EffectiveStreamingMode]
  | (string & {});

export const effectiveStreamingModeSchema: EnumSchema<EffectiveStreamingMode> =
  s.enumOf<EffectiveStreamingMode>(EffectiveStreamingMode);
