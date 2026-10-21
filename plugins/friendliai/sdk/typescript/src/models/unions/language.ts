import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The language of the input audio. Supplying the input language in
 * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will
 * improve accuracy and latency.
 */
export type Language = string;

export const languageSchema: Schema<Language> = s.of<Language>(s.union([s.string()]));
