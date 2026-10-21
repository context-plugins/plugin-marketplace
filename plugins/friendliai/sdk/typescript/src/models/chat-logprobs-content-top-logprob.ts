import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bytesSchema, type Bytes } from "./unions/bytes.js";

export type ChatLogprobsContentTopLogprob = {
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
};

export const chatLogprobsContentTopLogprobSchema: Schema<ChatLogprobsContentTopLogprob> =
  s.object<ChatLogprobsContentTopLogprob>({
    token: s.string(),
    logprob: s.float64(),
    bytes: s.optional(s.lazy(() => bytesSchema)),
  });
