import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where each entry's text may come from. "auto" (the default) reads captions and transcribes the
 * audio when there are none. "captions" reads an existing caption track only, so a captionless
 * video fails as no_transcript - the behaviour batch had before audio fallback existed. Note
 * "audio" is not accepted here: skipping captions for 50 videos at once is a job queue, not a batch
 * fetch.
 */
export const Mode1 = {
  Auto: "auto",
  Captions: "captions",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);
