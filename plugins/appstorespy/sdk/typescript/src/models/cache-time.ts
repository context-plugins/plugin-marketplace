import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const CacheTime = {
  _1D: "1d",
  _7D: "7d",
  _30D: "30d",
} as const;
export type CacheTime = (typeof CacheTime)[keyof typeof CacheTime] | (string & {});

export const cacheTimeSchema: EnumSchema<CacheTime> = s.enumOf<CacheTime>(CacheTime);
