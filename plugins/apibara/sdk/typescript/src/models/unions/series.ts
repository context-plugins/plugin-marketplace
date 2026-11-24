import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Series = string | string[];

export const seriesSchema: Schema<Series> = s.of<Series>(s.union([s.string(), s.array(s.string())]));
