import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AudioData = {
  /** The URL of the audio. */
  url: string;
};

export const audioDataSchema: Schema<AudioData> = s.object<AudioData>({
  url: s.string(),
});
