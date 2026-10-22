import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prefixPaddingMsSchema, type PrefixPaddingMs } from "./unions/prefix-padding-ms.js";
import { silenceDurationMsSchema, type SilenceDurationMs } from "./unions/silence-duration-ms.js";
import { thresholdSchema, type Threshold } from "./unions/threshold.js";

export type ServerVadChunkingStrategy = {
  /**
   * Must be set to `server_vad` to enable manual chunking using server side VAD.
   *
   * @default "server_vad"
   */
  type?: "server_vad";
  /** Amount of audio to include before the VAD detected speech (in milliseconds). */
  prefixPaddingMs?: PrefixPaddingMs;
  /**
   * Duration of silence to detect speech stop (in milliseconds). With shorter values the model will
   * respond more quickly, but may jump in on short pauses from the user.
   */
  silenceDurationMs?: SilenceDurationMs;
  /**
   * Sensitivity threshold (0.0 to 1.0) for voice activity detection. A higher threshold will
   * require louder audio to activate the model, and thus might perform better in noisy
   * environments.
   */
  threshold?: Threshold;
};

export const serverVadChunkingStrategySchema: Schema<ServerVadChunkingStrategy> =
  s.object<ServerVadChunkingStrategy>({
    type: s.defaulted(s.literal("server_vad"), "server_vad"),
    prefixPaddingMs: s.optional(s.lazy(() => prefixPaddingMsSchema)),
    silenceDurationMs: s.optional(s.lazy(() => silenceDurationMsSchema)),
    threshold: s.optional(s.lazy(() => thresholdSchema)),
    _keysMap: {
      prefixPaddingMs: "prefix_padding_ms",
      silenceDurationMs: "silence_duration_ms",
    },
  });
