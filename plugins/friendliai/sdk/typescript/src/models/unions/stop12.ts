import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When one of the stop phrases appears in the generation result, the API will stop generation. The
 * stop phrases are excluded from the result. Defaults to empty list.
 */
export type Stop12 = string[];

export const stop12Schema: Schema<Stop12> = s.of<Stop12>(s.union([s.array(s.string())]));
