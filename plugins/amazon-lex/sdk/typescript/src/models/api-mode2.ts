import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
 * streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance
 * and RecognizeText Amazon Lex Runtime API are used.
 */
export const ApiMode2 = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiMode2 = (typeof ApiMode2)[keyof typeof ApiMode2] | (string & {});

export const apiMode2Schema: EnumSchema<ApiMode2> = s.enumOf<ApiMode2>(ApiMode2);
