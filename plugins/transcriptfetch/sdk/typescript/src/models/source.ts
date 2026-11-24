import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the words came from: an existing caption track, or AI transcription of the audio (billed by
 * length, see usage.credits_spent).
 */
export const Source = {
  Captions: "captions",
  Audio: "audio",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
