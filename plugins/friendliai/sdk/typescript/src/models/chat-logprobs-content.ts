import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatLogprobsContentTopLogprobSchema,
  type ChatLogprobsContentTopLogprob,
} from "./chat-logprobs-content-top-logprob.js";
import { bytesSchema, type Bytes } from "./unions/bytes.js";

export type ChatLogprobsContent = {
  /** The token. */
  token: string;
  /** The log probability of this token. */
  logprob: number;
  /**
   * A list of integers representing the UTF-8 bytes representation of the token. Useful in
   * instances where characters are represented by multiple tokens and their byte representations
   * must be combined to generate the correct text representation. Can be `null` if there is no
   * bytes representation for the token.
   */
  bytes?: Bytes;
  /** List of the most likely tokens and their log probability, at this token position. */
  topLogprobs: ChatLogprobsContentTopLogprob[];
};

export const chatLogprobsContentSchema: Schema<ChatLogprobsContent> = s.object<ChatLogprobsContent>({
  token: s.string(),
  logprob: s.float64(),
  bytes: s.optional(s.lazy(() => bytesSchema)),
  topLogprobs: s.array(s.lazy(() => chatLogprobsContentTopLogprobSchema)),
  _keysMap: {
    topLogprobs: "top_logprobs",
  },
});
