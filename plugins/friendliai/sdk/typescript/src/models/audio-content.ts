import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audioData2Schema, type AudioData2 } from "./audio-data2.js";

export type AudioContent = {
  /** The type of the message content. @default "audio_url" */
  type?: "audio_url";
  /** The audio URL data. */
  audioUrl: AudioData2;
};

export const audioContentSchema: Schema<AudioContent> = s.object<AudioContent>({
  type: s.defaulted(s.literal("audio_url"), "audio_url"),
  audioUrl: audioData2Schema,
  _keysMap: {
    audioUrl: "audio_url",
  },
});
