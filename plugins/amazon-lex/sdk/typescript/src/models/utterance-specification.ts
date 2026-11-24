import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentStateSchema, type IntentState } from "./intent-state.js";
import { mode1Schema, type Mode1 } from "./mode1.js";
import { utteranceBotResponseSchema, type UtteranceBotResponse } from "./utterance-bot-response.js";

export type UtteranceSpecification = {
  /** The identifier of the alias of the bot that the utterance was made to. */
  botAliasId?: string;
  /** The version of the bot that the utterance was made to. */
  botVersion?: string;
  /** The locale of the bot that the utterance was made to. */
  localeId?: string;
  /** The identifier of the session that the utterance was made in. */
  sessionId?: string;
  /** The channel that is integrated with the bot that the utterance was made to. */
  channel?: string;
  /**
   * The mode of the session. The possible values are as follows: Speech – The session consisted of
   * spoken dialogue. Text – The session consisted of written dialogue. DTMF – The session consisted
   * of touch-tone keypad (Dual Tone Multi-Frequency) key presses. MultiMode – The session consisted
   * of multiple modes.
   */
  mode?: Mode1;
  /**
   * The date and time when the conversation in which the utterance took place began. A conversation
   * is defined as a unique combination of a sessionId and an originatingRequestId.
   */
  conversationStartTime?: Date;
  /**
   * The date and time when the conversation in which the utterance took place ended. A conversation
   * is defined as a unique combination of a sessionId and an originatingRequestId.
   */
  conversationEndTime?: Date;
  /** The text of the utterance. */
  utterance?: string;
  /** The date and time when the utterance took place. */
  utteranceTimestamp?: Date;
  /** The duration in milliseconds of the audio associated with the utterance. */
  audioVoiceDurationMillis?: number;
  /** Specifies whether the bot understood the utterance or not. */
  utteranceUnderstood?: boolean;
  /**
   * The input type of the utterance. The possible values are as follows: PCM format: audio data
   * must be in little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16;
   * sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000; sample-size-bits=16;
   * channel-count=1; is-big-endian=false Opus format
   * audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text
   * format text/plain; charset=utf-8
   */
  inputType?: string;
  /**
   * The output type of the utterance. The possible values are as follows: audio/mpeg audio/ogg
   * audio/pcm (16 KHz) audio/ (defaults to mpeg) text/plain; charset=utf-8
   */
  outputType?: string;
  /** The name of the intent that the utterance is associated to. */
  associatedIntentName?: string;
  /** The name of the slot that the utterance is associated to. */
  associatedSlotName?: string;
  /** The state of the intent that the utterance is associated to. */
  intentState?: IntentState;
  /**
   * The type of dialog action that the utterance is associated to. See the type field in
   * DialogAction for more information.
   */
  dialogActionType?: string;
  /** The identifier for the audio of the bot response. */
  botResponseAudioVoiceId?: string;
  /** The slots that have been filled in the session by the time of the utterance. */
  slotsFilledInSession?: string;
  /** The identifier of the request associated with the utterance. */
  utteranceRequestId?: string;
  /** A list of objects containing information about the bot response to the utterance. */
  botResponses?: UtteranceBotResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceSpecificationSchema: Schema<UtteranceSpecification> = s.object<UtteranceSpecification>(
  {
    botAliasId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    sessionId: s.optional(s.string()),
    channel: s.optional(s.string()),
    mode: s.optional(s.lazy(() => mode1Schema)),
    conversationStartTime: s.optional(s.dateTime()),
    conversationEndTime: s.optional(s.dateTime()),
    utterance: s.optional(s.string()),
    utteranceTimestamp: s.optional(s.dateTime()),
    audioVoiceDurationMillis: s.optional(s.int()),
    utteranceUnderstood: s.optional(s.boolean()),
    inputType: s.optional(s.string()),
    outputType: s.optional(s.string()),
    associatedIntentName: s.optional(s.string()),
    associatedSlotName: s.optional(s.string()),
    intentState: s.optional(s.lazy(() => intentStateSchema)),
    dialogActionType: s.optional(s.string()),
    botResponseAudioVoiceId: s.optional(s.string()),
    slotsFilledInSession: s.optional(s.string()),
    utteranceRequestId: s.optional(s.string()),
    botResponses: s.optional(s.array(s.lazy(() => utteranceBotResponseSchema))),
  },
  { additionalProperties: s.json() },
);
