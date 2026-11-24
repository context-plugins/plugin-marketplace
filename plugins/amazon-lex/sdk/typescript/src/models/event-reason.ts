import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of user input that Amazon Lex V2 detected. */
export const EventReason = {
  DtmfStartDetected: "DTMF_START_DETECTED",
  TextDetected: "TEXT_DETECTED",
  VoiceStartDetected: "VOICE_START_DETECTED",
} as const;
export type EventReason = (typeof EventReason)[keyof typeof EventReason] | (string & {});

export const eventReasonSchema: EnumSchema<EventReason> = s.enumOf<EventReason>(EventReason);
