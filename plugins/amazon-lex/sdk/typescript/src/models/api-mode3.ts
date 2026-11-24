import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
 * streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming,
 * RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
 */
export const ApiMode3 = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiMode3 = (typeof ApiMode3)[keyof typeof ApiMode3] | (string & {});

export const apiMode3Schema: EnumSchema<ApiMode3> = s.enumOf<ApiMode3>(ApiMode3);
