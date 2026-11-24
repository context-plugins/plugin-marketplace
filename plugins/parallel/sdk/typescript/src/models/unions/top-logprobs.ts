import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TopLogprobs = number;

export const topLogprobsSchema: Schema<TopLogprobs> = s.of<TopLogprobs>(s.union([s.int()]));
