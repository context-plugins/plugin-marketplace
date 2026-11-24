import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify whether your input media contains only one person (DICTATION) or contains a conversation
 * between two people (CONVERSATION). For example, DICTATION could be used for a medical
 * professional wanting to transcribe voice memos; CONVERSATION could be used for transcribing the
 * doctor-patient dialogue during the patient's office visit.
 */
export const Type2 = {
  Conversation: "CONVERSATION",
  Dictation: "DICTATION",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
