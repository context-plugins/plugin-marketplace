import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp. */
export type PublishAt1 = string | number;

export const publishAt1Schema: Schema<PublishAt1> = s.of<PublishAt1>(s.union([s.string(), s.float64()]));
