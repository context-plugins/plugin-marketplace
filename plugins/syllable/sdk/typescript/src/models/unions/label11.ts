import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool name (tool events) or the latency measurement name (e.g. stt_processing) */
export type Label11 = string;

export const label11Schema: Schema<Label11> = s.of<Label11>(s.union([s.string()]));
