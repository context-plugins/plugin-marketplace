import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { content1Schema, type Content1 } from "./unions/content1.js";

export type ChatLogprobs = {
  /** A list of message content tokens with log probability information. */
  content?: Content1;
};

export const chatLogprobsSchema: Schema<ChatLogprobs> = s.object<ChatLogprobs>({
  content: s.optional(s.lazy(() => content1Schema)),
});
