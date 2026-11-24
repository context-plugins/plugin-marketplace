import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to stream the chat completions., Whether to stream the response. */
export type Stream = boolean;

export const streamSchema: Schema<Stream> = s.of<Stream>(s.union([s.boolean()]));
