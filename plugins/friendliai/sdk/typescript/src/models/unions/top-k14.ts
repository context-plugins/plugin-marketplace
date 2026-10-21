import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Limits sampling to the `k` most likely tokens at each decoding step. */
export type TopK14 = number;

export const topK14Schema: Schema<TopK14> = s.of<TopK14>(s.union([s.int()]));
