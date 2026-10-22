import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audioMinuteSchema, type AudioMinute } from "./unions/audio-minute.js";
import { cacheWriteSchema, type CacheWrite } from "./unions/cache-write.js";
import { inputCacheReadSchema, type InputCacheRead } from "./unions/input-cache-read.js";

/** Per-token pricing in USD for input, output, and optional cache or audio usage. */
export type PricingModel2 = {
  /** Price per 1 input token in USD. */
  input: string;
  /** Price per 1 output token in USD. */
  output: string;
  /** Alias of input. Price per 1 input token in USD. */
  prompt: string;
  /** Alias of output. Price per 1 output token in USD. */
  completion: string;
  /** Price per 1 cached input token read in USD. */
  inputCacheRead: InputCacheRead;
  /** Price per 1 input token written to cache in USD. */
  cacheWrite: CacheWrite;
  /** Price per minute of audio in USD. */
  audioMinute: AudioMinute;
};

export const pricingModel2Schema: Schema<PricingModel2> = s.object<PricingModel2>({
  input: s.string(),
  output: s.string(),
  prompt: s.string(),
  completion: s.string(),
  inputCacheRead: inputCacheReadSchema,
  cacheWrite: cacheWriteSchema,
  audioMinute: audioMinuteSchema,
  _keysMap: {
    inputCacheRead: "input_cache_read",
    cacheWrite: "cache_write",
    audioMinute: "audio_minute",
  },
});
