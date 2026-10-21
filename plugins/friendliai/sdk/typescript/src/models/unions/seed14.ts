import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The seed to use for image generation. */
export type Seed14 = number;

export const seed14Schema: Schema<Seed14> = s.of<Seed14>(s.union([s.int()]));
