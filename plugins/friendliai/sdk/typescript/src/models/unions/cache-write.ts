import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Price per 1 input token written to cache in USD. */
export type CacheWrite = string;

export const cacheWriteSchema: Schema<CacheWrite> = s.of<CacheWrite>(s.union([s.string()]));
