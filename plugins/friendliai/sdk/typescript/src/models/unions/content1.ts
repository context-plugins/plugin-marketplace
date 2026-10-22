import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chatLogprobsContentSchema, type ChatLogprobsContent } from "../chat-logprobs-content.js";

/** A list of message content tokens with log probability information. */
export type Content1 = ChatLogprobsContent[];

export const content1Schema: Schema<Content1> = s.of<Content1>(
  s.union([s.array(s.lazy(() => chatLogprobsContentSchema))]),
);
