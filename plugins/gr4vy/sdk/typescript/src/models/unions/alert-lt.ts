import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The value below which a sample is considered unhealthy. */
export type AlertLt = number | string;

export const alertLtSchema: Schema<AlertLt> = s.of<AlertLt>(s.union([s.int(), s.float64(), s.string()]));
