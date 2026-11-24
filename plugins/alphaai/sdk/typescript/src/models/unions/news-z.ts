import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NewsZ = number;

export const newsZSchema: Schema<NewsZ> = s.of<NewsZ>(s.union([s.float64()]));
