import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether we use streaming or non-streaming APIs are used for the test set execution. For
 * streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming,
 * RecognizeUtterance and RecognizeText Amazon Lex Runtime API is used.
 */
export const ApiMode = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiMode = (typeof ApiMode)[keyof typeof ApiMode] | (string & {});

export const apiModeSchema: EnumSchema<ApiMode> = s.enumOf<ApiMode>(ApiMode);
