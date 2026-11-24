import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the text may come from. "captions" reads an existing caption track and fails if there is
 * none, which is the only way to avoid audio transcription. "audio" skips captions and transcribes
 * the audio. "auto" (the default) tries captions first and transcribes the audio when there are
 * none. Short media may finish inline after a wait of up to 45 seconds; longer work returns 202
 * with a job to poll or deliver by callback. Audio is charged only on delivery: 1 credit per
 * started minute of audio, minimum 1 (a 20-minute video is 20; the 4-hour cap is 240). Caption
 * fetches are always 1 credit.
 */
export const Mode = {
  Captions: "captions",
  Audio: "audio",
  Auto: "auto",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
