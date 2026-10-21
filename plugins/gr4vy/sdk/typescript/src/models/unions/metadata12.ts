import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions where their `metadata` values contain all of the provided `metadata`
 * keys. The value sent for `metadata` must be formatted as a JSON string, and all keys and values
 * must be strings. This value should also be URL encoded.
 */
export type Metadata12 = string[];

export const metadata12Schema: Schema<Metadata12> = s.of<Metadata12>(s.union([s.array(s.string())]));
