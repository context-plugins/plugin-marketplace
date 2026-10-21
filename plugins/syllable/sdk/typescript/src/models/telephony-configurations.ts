import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { asyncEnabledSchema, type AsyncEnabled } from "./unions/async-enabled.js";
import { interruptibilitySchema, type Interruptibility } from "./unions/interruptibility.js";
import { outputPaddingSchema, type OutputPadding } from "./unions/output-padding.js";
import { overallInputTimeoutSchema, type OverallInputTimeout } from "./unions/overall-input-timeout.js";
import { passiveInputStartSchema, type PassiveInputStart } from "./unions/passive-input-start.js";
import {
  passiveSpeechInputEnabledSchema,
  type PassiveSpeechInputEnabled,
} from "./unions/passive-speech-input-enabled.js";
import { postDtmfInputTimeoutSchema, type PostDtmfInputTimeout } from "./unions/post-dtmf-input-timeout.js";
import {
  postSpeechInputTimeoutSchema,
  type PostSpeechInputTimeout,
} from "./unions/post-speech-input-timeout.js";
import { preInputTimeoutSchema, type PreInputTimeout } from "./unions/pre-input-timeout.js";
import { sipConfiguration1Schema, type SipConfiguration1 } from "./unions/sip-configuration1.js";
import {
  transferLegVoicemailDetectionEnabledSchema,
  type TransferLegVoicemailDetectionEnabled,
} from "./unions/transfer-leg-voicemail-detection-enabled.js";

export type TelephonyConfigurations = {
  /** Pre input silence threshold */
  preInputTimeout?: PreInputTimeout;
  /** Post speech silence timeout to determine input as ended. */
  postSpeechInputTimeout?: PostSpeechInputTimeout;
  /** Post dtmf silence timeout to determine input as ended. */
  postDtmfInputTimeout?: PostDtmfInputTimeout;
  /** Total input timeout */
  overallInputTimeout?: OverallInputTimeout;
  /** Number of seconds to start listening to user input before assistant speech ends */
  outputPadding?: OutputPadding;
  /** Interruptibility setting for user input.Valid values: none, dtmf_only, speech_only, all */
  interruptibility?: Interruptibility;
  /** Whether passive speech input is enabled (input while assistant is speaking) */
  passiveSpeechInputEnabled?: PassiveSpeechInputEnabled;
  /** Waiting time to start passive input (in seconds) after start of assistant speech */
  passiveInputStart?: PassiveInputStart;
  /** Whether asynchronous mode is enabled for the conversation */
  asyncEnabled?: AsyncEnabled;
  /** Whether transfer leg voicemail detection is enabled */
  transferLegVoicemailDetectionEnabled?: TransferLegVoicemailDetectionEnabled;
  /** SIP routing configuration applied when transferring calls on this channel */
  sipConfiguration?: SipConfiguration1;
};

export const telephonyConfigurationsSchema: Schema<TelephonyConfigurations> =
  s.object<TelephonyConfigurations>({
    preInputTimeout: s.optional(s.lazy(() => preInputTimeoutSchema)),
    postSpeechInputTimeout: s.optional(s.lazy(() => postSpeechInputTimeoutSchema)),
    postDtmfInputTimeout: s.optional(s.lazy(() => postDtmfInputTimeoutSchema)),
    overallInputTimeout: s.optional(s.lazy(() => overallInputTimeoutSchema)),
    outputPadding: s.optional(s.lazy(() => outputPaddingSchema)),
    interruptibility: s.optional(s.lazy(() => interruptibilitySchema)),
    passiveSpeechInputEnabled: s.optional(s.lazy(() => passiveSpeechInputEnabledSchema)),
    passiveInputStart: s.optional(s.lazy(() => passiveInputStartSchema)),
    asyncEnabled: s.optional(s.lazy(() => asyncEnabledSchema)),
    transferLegVoicemailDetectionEnabled: s.optional(
      s.lazy(() => transferLegVoicemailDetectionEnabledSchema),
    ),
    sipConfiguration: s.optional(s.lazy(() => sipConfiguration1Schema)),
    _keysMap: {
      preInputTimeout: "pre_input_timeout",
      postSpeechInputTimeout: "post_speech_input_timeout",
      postDtmfInputTimeout: "post_dtmf_input_timeout",
      overallInputTimeout: "overall_input_timeout",
      outputPadding: "output_padding",
      passiveSpeechInputEnabled: "passive_speech_input_enabled",
      passiveInputStart: "passive_input_start",
      asyncEnabled: "async_enabled",
      transferLegVoicemailDetectionEnabled: "transfer_leg_voicemail_detection_enabled",
      sipConfiguration: "sip_configuration",
    },
  });
