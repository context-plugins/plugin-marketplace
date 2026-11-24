import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL where the browser can be viewed live in real-time */
export type LiveUrl = string;

export const liveUrlSchema: Schema<LiveUrl> = s.of<LiveUrl>(s.union([s.string()]));
