import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * tool | llm | tts | stt | http. A tool call surfaces once, as a `kind=tool` event; its redundant
 * tool-latency measurement is dropped from the timeline.
 */
export type Category1 = string;

export const category1Schema: Schema<Category1> = s.of<Category1>(s.union([s.string()]));
