import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioInputEventSchema, type AudioInputEvent } from "./audio-input-event.js";
import { configurationEventSchema, type ConfigurationEvent } from "./configuration-event.js";
import { disconnectionEventSchema, type DisconnectionEvent } from "./disconnection-event.js";
import { dtmfInputEventSchema, type DtmfInputEvent } from "./dtmf-input-event.js";
import { playbackCompletionEventSchema, type PlaybackCompletionEvent } from "./playback-completion-event.js";
import { textInputEventSchema, type TextInputEvent } from "./text-input-event.js";

/** Exactly one member is set. */
export type StartConversationRequestEventStream = {
  configurationEvent?: ConfigurationEvent;
  audioInputEvent?: AudioInputEvent;
  dtmfInputEvent?: DtmfInputEvent;
  textInputEvent?: TextInputEvent;
  playbackCompletionEvent?: PlaybackCompletionEvent;
  disconnectionEvent?: DisconnectionEvent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startConversationRequestEventStreamSchema: Schema<StartConversationRequestEventStream> =
  s.object<StartConversationRequestEventStream>(
    {
      configurationEvent: s.optional(s.lazy(() => configurationEventSchema)),
      audioInputEvent: s.optional(s.lazy(() => audioInputEventSchema)),
      dtmfInputEvent: s.optional(s.lazy(() => dtmfInputEventSchema)),
      textInputEvent: s.optional(s.lazy(() => textInputEventSchema)),
      playbackCompletionEvent: s.optional(s.lazy(() => playbackCompletionEventSchema)),
      disconnectionEvent: s.optional(s.lazy(() => disconnectionEventSchema)),
      _keysMap: {
        configurationEvent: "ConfigurationEvent",
        audioInputEvent: "AudioInputEvent",
        dtmfInputEvent: "DTMFInputEvent",
        textInputEvent: "TextInputEvent",
        playbackCompletionEvent: "PlaybackCompletionEvent",
        disconnectionEvent: "DisconnectionEvent",
      },
    },
    { additionalProperties: s.json() },
  );
