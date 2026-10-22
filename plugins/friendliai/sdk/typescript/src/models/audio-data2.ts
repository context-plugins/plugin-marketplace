import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The audio URL data. */
export type AudioData2 = {
  /** The URL of the audio. */
  url: string;
};

export const audioData2Schema: Schema<AudioData2> = s.object<AudioData2>({
  url: s.string(),
});
