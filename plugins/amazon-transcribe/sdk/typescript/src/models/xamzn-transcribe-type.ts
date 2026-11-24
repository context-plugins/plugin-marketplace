import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeType = {
  Conversation: "CONVERSATION",
  Dictation: "DICTATION",
} as const;
export type XAmznTranscribeType =
  | (typeof XAmznTranscribeType)[keyof typeof XAmznTranscribeType]
  | (string & {});

export const xAmznTranscribeTypeSchema: EnumSchema<XAmznTranscribeType> =
  s.enumOf<XAmznTranscribeType>(XAmznTranscribeType);
