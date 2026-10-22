import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Price per minute of audio in USD. */
export type AudioMinute = string;

export const audioMinuteSchema: Schema<AudioMinute> = s.of<AudioMinute>(s.union([s.string()]));
