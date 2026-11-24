import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioTypeSchema, type AudioType } from "./audio-type.js";

export type AudioFillerSettings = {
  /**
   * Specifies whether audio filler playback is enabled for the bot locale. Set to true to play
   * filler audio while Amazon Lex processes a user utterance. Set to false to disable filler audio.
   */
  enabled?: boolean;
  /**
   * The identifier of the audio filler to play while Amazon Lex processes the user's input. This
   * field is required when enabled is true.
   */
  audioType?: AudioType;
  /**
   * The time, in milliseconds, to wait after the end of the user's utterance before starting audio
   * filler playback. Valid range is 500 to 5000 milliseconds. If not specified, Amazon Lex uses a
   * default of 2500 milliseconds.
   */
  startDelayInMilliseconds?: number;
  /**
   * The minimum time, in milliseconds, that audio filler plays once it has started, even if the bot
   * response becomes ready sooner. Valid range is 1000 to 5000 milliseconds. If not specified,
   * Amazon Lex uses a default of 3000 milliseconds.
   */
  minimumPlayDurationInMilliseconds?: number;
  /**
   * The silent delay, in milliseconds, inserted between the end of audio filler playback and the
   * start of the bot's response. Valid range is 200 to 1000 milliseconds. If not specified, Amazon
   * Lex uses a default of 500 milliseconds.
   */
  responseDeliveryDelayInMilliseconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioFillerSettingsSchema: Schema<AudioFillerSettings> = s.object<AudioFillerSettings>(
  {
    enabled: s.optional(s.boolean()),
    audioType: s.optional(s.lazy(() => audioTypeSchema)),
    startDelayInMilliseconds: s.optional(s.int()),
    minimumPlayDurationInMilliseconds: s.optional(s.int()),
    responseDeliveryDelayInMilliseconds: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
