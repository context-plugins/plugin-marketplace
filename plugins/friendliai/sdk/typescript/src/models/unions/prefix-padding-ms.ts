import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount of audio to include before the VAD detected speech (in milliseconds). */
export type PrefixPaddingMs = number;

export const prefixPaddingMsSchema: Schema<PrefixPaddingMs> = s.of<PrefixPaddingMs>(s.union([s.int()]));
