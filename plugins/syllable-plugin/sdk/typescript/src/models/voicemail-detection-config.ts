import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode11Schema, type Mode11 } from "./unions/mode11.js";
import {
  voicemailDetectionOverallTimeoutSchema,
  type VoicemailDetectionOverallTimeout,
} from "./unions/voicemail-detection-overall-timeout.js";
import {
  voicemailDetectionPostSpeechTimeoutSchema,
  type VoicemailDetectionPostSpeechTimeout,
} from "./unions/voicemail-detection-post-speech-timeout.js";
import {
  voicemailDetectionPreSpeechTimeoutSchema,
  type VoicemailDetectionPreSpeechTimeout,
} from "./unions/voicemail-detection-pre-speech-timeout.js";
import {
  voicemailDetectionSpeechThresholdSchema,
  type VoicemailDetectionSpeechThreshold,
} from "./unions/voicemail-detection-speech-threshold.js";
import {
  voicemailDetectionV2PreSpeechTimeoutSchema,
  type VoicemailDetectionV2PreSpeechTimeout,
} from "./unions/voicemail-detection-v2-pre-speech-timeout.js";

/**
 * Voicemail detection config stored on outbound_campaign.voicemail_detection.
 *
 * `mode` selects the (mutually-exclusive) strategy; the remaining fields are detection timeouts.
 * Unknown keys are preserved (`extra='allow'`) so the schema stays backwards compatible with blobs
 * written before fields were added. See ZOO-7818.
 */
export type VoicemailDetectionConfig = {
  /**
   * Voicemail-detection strategy: 'v1' (original check_voicemail/leave_voicemail) or 'v2'
   * (Voicemail Detection 2, which suppresses the turn-0 greeting and uses the greeting tool). The
   * two modes are mutually exclusive. Omitted/null on legacy v1 campaigns is treated as v1.
   */
  mode?: Mode11;
  voicemailDetectionOverallTimeout?: VoicemailDetectionOverallTimeout;
  voicemailDetectionPreSpeechTimeout?: VoicemailDetectionPreSpeechTimeout;
  voicemailDetectionPostSpeechTimeout?: VoicemailDetectionPostSpeechTimeout;
  voicemailDetectionSpeechThreshold?: VoicemailDetectionSpeechThreshold;
  voicemailDetectionV2PreSpeechTimeout?: VoicemailDetectionV2PreSpeechTimeout;
};

export const voicemailDetectionConfigSchema: Schema<VoicemailDetectionConfig> =
  s.object<VoicemailDetectionConfig>({
    mode: s.optional(s.lazy(() => mode11Schema)),
    voicemailDetectionOverallTimeout: s.optional(s.lazy(() => voicemailDetectionOverallTimeoutSchema)),
    voicemailDetectionPreSpeechTimeout: s.optional(s.lazy(() => voicemailDetectionPreSpeechTimeoutSchema)),
    voicemailDetectionPostSpeechTimeout: s.optional(s.lazy(() => voicemailDetectionPostSpeechTimeoutSchema)),
    voicemailDetectionSpeechThreshold: s.optional(s.lazy(() => voicemailDetectionSpeechThresholdSchema)),
    voicemailDetectionV2PreSpeechTimeout: s.optional(
      s.lazy(() => voicemailDetectionV2PreSpeechTimeoutSchema),
    ),
    _keysMap: {
      voicemailDetectionOverallTimeout: "voicemail_detection_overall_timeout",
      voicemailDetectionPreSpeechTimeout: "voicemail_detection_pre_speech_timeout",
      voicemailDetectionPostSpeechTimeout: "voicemail_detection_post_speech_timeout",
      voicemailDetectionSpeechThreshold: "voicemail_detection_speech_threshold",
      voicemailDetectionV2PreSpeechTimeout: "voicemail_detection_v2_pre_speech_timeout",
    },
  });
