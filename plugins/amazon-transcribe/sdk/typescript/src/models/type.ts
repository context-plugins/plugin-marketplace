import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the input media is a dictation or a conversation, as specified in the
 * StartMedicalTranscriptionJob request.
 */
export const Type = {
  Conversation: "CONVERSATION",
  Dictation: "DICTATION",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
