import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration object for automatic video transcription with translation options. */
export type AutoTranscription = {
  /** Array of target language codes for transcription translation. */
  translate?: string[];
};

export const autoTranscriptionSchema: Schema<AutoTranscription> = s.object<AutoTranscription>({
  translate: s.optional(s.array(s.string())),
});
