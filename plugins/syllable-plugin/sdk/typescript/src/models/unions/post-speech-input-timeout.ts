import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Post speech silence timeout to determine input as ended. */
export type PostSpeechInputTimeout = number;

export const postSpeechInputTimeoutSchema: Schema<PostSpeechInputTimeout> = s.of<PostSpeechInputTimeout>(
  s.union([s.float64()]),
);
