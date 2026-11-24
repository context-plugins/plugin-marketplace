import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The use case most closely describing the audio content to be recognized. */
export const InteractionType = {
  InteractionTypeUnspecified: "INTERACTION_TYPE_UNSPECIFIED",
  Discussion: "DISCUSSION",
  Presentation: "PRESENTATION",
  PhoneCall: "PHONE_CALL",
  Voicemail: "VOICEMAIL",
  ProfessionallyProduced: "PROFESSIONALLY_PRODUCED",
  VoiceSearch: "VOICE_SEARCH",
  VoiceCommand: "VOICE_COMMAND",
  Dictation: "DICTATION",
} as const;
export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType] | (string & {});

export const interactionTypeSchema: EnumSchema<InteractionType> = s.enumOf<InteractionType>(InteractionType);
