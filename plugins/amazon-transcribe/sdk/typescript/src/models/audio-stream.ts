import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioEventSchema, type AudioEvent } from "./audio-event.js";
import { configurationEventSchema, type ConfigurationEvent } from "./configuration-event.js";

/** Exactly one member is set. */
export type AudioStream = {
  audioEvent?: AudioEvent;
  configurationEvent?: ConfigurationEvent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioStreamSchema: Schema<AudioStream> = s.object<AudioStream>(
  {
    audioEvent: s.optional(s.lazy(() => audioEventSchema)),
    configurationEvent: s.optional(s.lazy(() => configurationEventSchema)),
    _keysMap: {
      audioEvent: "AudioEvent",
      configurationEvent: "ConfigurationEvent",
    },
  },
  { additionalProperties: s.json() },
);
